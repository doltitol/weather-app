import React from 'react';
import CurrentWeatherBody from '../CurrentWeatherBody/CurrentWeatherBody';
import CurrentWeatherHeader from '../CurrentWeatherHeader/CurrentWeatherHeader';
import './CurrentWeatherContainer.css';

const CurrentWeatherContainer = () => {
    return (
        <div className="card weather">
            <CurrentWeatherHeader day="Thursday" time="11:00" />
            <CurrentWeatherBody
                city="Lagos"
                country="NG"
                desc="Light rain"
                temperature={ 30 }
                pressure={ 1012 }
                humidity={ 98 }
                wind={ 2 }
                icon="10d"
            />
        </div>
    )
}

export default CurrentWeatherContainer