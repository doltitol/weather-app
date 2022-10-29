import React from 'react';
import CurrentWeatherHeader from '../CurrentWeatherHeader/CurrentWeatherHeader';
import "./CurrentWeatherContainer.css"

const CurrentWeatherContainer = () => {
    return (
        <div className="card weather">
            <CurrentWeatherHeader day="Thursday" time="11:00" />
        </div>
    )
}

export default CurrentWeatherContainer