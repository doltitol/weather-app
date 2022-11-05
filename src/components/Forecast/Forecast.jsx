import React, { useEffect, useState } from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import './Forecast.css';

const Forecast = (props) => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ forecastDetails, setForecastDetails ] = useState(null);
    function getForecastDetails(response) {
        setIsLoading(false);
        setForecastDetails(response.data.daily);
    }
    function getForecast() {
        const apiKey = 'aa04f9t2644ab7acc0ced1o03b410700';
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${ props.city }&key=${ apiKey }&units=${ props.unit }`;
        axios.get(apiUrl).then(getForecastDetails);
    }
    useEffect(() => {
        setIsLoading(true);
    }, [ props.city, props.unit ]);
    if (isLoading) {
        getForecast();
        return <BallTriangle
            height={ 100 }
            width={ 100 }
            radius={ 5 }
            color={ 'rgb(55, 154, 224)' }
            ariaLabel="ball-triangle-loading"
            wrapperClass="loader"
            wrapperStyle=""
            visible={ true }
        />;
    } else {
        return (
            <div className="weather-next">
                <h3>Next 5 days</h3>
                <div className="row d-flex justify-content-between">
                    {
                        forecastDetails.map((forecast, index) => {
                            if (index < 5) {
                                return <ForecastDay data={ forecast } unit={ props.unit } key={ index } />;
                            } else {
                                return null;
                            };
                        })
                    }


                </div>
            </div>
        );
    }
};

export default Forecast;