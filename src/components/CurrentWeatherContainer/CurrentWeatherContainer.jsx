import React, { useState } from 'react';
import CurrentWeatherBody from '../CurrentWeatherBody/CurrentWeatherBody';
import "./CurrentWeatherContainer.css";
import { BallTriangle } from 'react-loader-spinner';
import FormatDate from '../FormatDate/FormatDate';
import axios from 'axios';
import Forecast from '../Forecast/Forecast';

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
        wind: '',
        date: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setCityDetails({ ...cityDetails, loading: false });
        searchCity(unit, city);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const getCityName = (response) => {
        searchCity(unit, response.data.city);
    };
    const getCityInfo = (response) => {
        setCity(response.data.city);
        setCityDetails({
            loading: false,
            city: response.data.city,
            country: response.data.country,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            pressure: response.data.temperature.pressure,
            wind: response.data.wind.speed,
            date: new Date(response.data.time * 1000)
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
        const apiKey = 'aa04f9t2644ab7acc0ced1o03b410700';
        const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${ city }&key=${ apiKey }&units=${ unit }`;
        axios.get(apiUrl).then(getCityInfo);
    }
    function getLocation(position) {
        const apiKey = 'aa04f9t2644ab7acc0ced1o03b410700';
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        const apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${ longitude }&lat=${ latitude }&key=${ apiKey }&units=${ unit }`;
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
                <FormatDate date={ cityDetails.date } />
                <CurrentWeatherBody data={ cityDetails } handleCelsiusChange={ handleCelsiusChange } handleFahrenheitChange={ handleFahrenheitChange } />
            </div>
            <Forecast city={ cityDetails.city } unit={ unit } />
        </div>;
    }
};

export default CurrentWeatherContainer;