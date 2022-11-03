import React, { useState } from 'react';
import CurrentWeatherBody from '../CurrentWeatherBody/CurrentWeatherBody';
import CurrentWeatherHeader from '../CurrentWeatherHeader/CurrentWeatherHeader';
import "./CurrentWeatherContainer.css";
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';

const CurrentWeatherContainer = () => {
    const [ city, setCity ] = useState('');
    const [ unit, setUnit ] = useState('metric');
    const [ cityDetails, setCityDetails ] = useState({
        loading: true,
        city: '',
        country: '',
        description: '',
        icon: '',
        temperature: '',
        humidity: '',
        pressure: '',
        wind: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        searchCity(unit, city);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const getCityName = (response) => {
        searchCity(unit, response.data.name);
    };
    const getCityInfo = (response) => {
        setCity(response.data.name);
        setCityDetails({
            loading: false,
            city: response.data.name,
            country: response.data.sys.country,
            description: response.data.weather[ 0 ].description,
            icon: response.data.weather[ 0 ].icon,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            wind: response.data.wind.speed
        });

    };
    const handleCelsiusChange = () => {
        setUnit('metric');
        searchCity('metric', city);
    };
    const handleFahrenheitChange = () => {
        setUnit('imperial');
        searchCity('imperial', city);
    };
    function searchCity(unit, city) {
        const apiKey = "cf25d8eb42806c8d7039bbac5d23b349";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=${ unit }`;
        axios.get(apiUrl).then(getCityInfo);
    }
    function getLocation(position) {
        const apiKey = "cf25d8eb42806c8d7039bbac5d23b349";
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ apiKey }&units=metric`;
        axios.get(apiUrl).then(getCityName);
    }
    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(getLocation);
    }
    if (cityDetails.loading) {
        getCurrentLocation();
        return <div style={ { textAlign: 'center' } }>
            <form id="search-form" onSubmit={ handleSubmit }>
                <input
                    type="search"
                    id="search"
                    aria-label="search"
                    placeholder="Search City..."
                    onChange={ handleCityChange }
                />
                <button type="submit" className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <BallTriangle
                height={ 100 }
                width={ 100 }
                radius={ 5 }
                color={ 'rgb(55, 154, 224)' }
                ariaLabel="ball-triangle-loading"
                wrapperClass="loader"
                wrapperStyle=""
                visible={ true }
            />
        </div>;
    } else {
        return <div>
            <form id="search-form" onSubmit={ handleSubmit }>
                <input
                    type="search"
                    id="search"
                    aria-label="search"
                    placeholder="Search City..."
                    onChange={ handleCityChange }
                />
                <button type="submit" className="search-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <div className="card weather">
                <CurrentWeatherHeader day="Thursday" time="11:00" />
                <CurrentWeatherBody data={ cityDetails } handleCelsiusChange={ handleCelsiusChange } handleFahrenheitChange={ handleFahrenheitChange } />
            </div>
        </div>;
    }

};

export default CurrentWeatherContainer;