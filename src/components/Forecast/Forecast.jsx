import React from 'react';
import ForecastDay from '../ForecastDay/ForecastDay';
import './Forecast.css';

const Forecast = () => {
    const forecast = [
        {
            icon: '10d',
            day: 'Thu',
            lowerTemp: 23,
            higherTemp: 30,
            desc: 'light rain'
        },
        {
            icon: '10d',
            day: 'Fri',
            lowerTemp: 23,
            higherTemp: 27,
            desc: 'light rain'
        },
        {
            icon: '10d',
            day: 'Sat',
            lowerTemp: 23,
            higherTemp: 31,
            desc: 'light rain'
        },
        {
            icon: '10d',
            day: 'Sun',
            lowerTemp: 23,
            higherTemp: 29,
            desc: 'light rain'
        },
        {
            icon: '10d',
            day: 'Mon',
            lowerTemp: 23,
            higherTemp: 31,
            desc: 'light rain'
        }
    ]
    return (
        <div className="weather-next">
            <h3>Next 5 days</h3>
            <div className="row d-flex justify-content-between">
                {
                    forecast.map((forecast, index) => (
                        <ForecastDay
                            icon={ forecast.icon }
                            day={ forecast.day }
                            lowerTemp={ forecast.lowerTemp }
                            higherTemp={ forecast.higherTemp }
                            desc={ forecast.desc }
                            key={ index }
                        />
                    ))
                }


            </div>
        </div>
    )
}

export default Forecast