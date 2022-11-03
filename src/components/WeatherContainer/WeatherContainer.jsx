import React from 'react';
import Footer from '../Footer/Footer';
// import Forecast from '../Forecast/Forecast';
import './WeatherContainer.css';
import CurrentWeatherContainer from '../CurrentWeatherContainer/CurrentWeatherContainer';

const WeatherContainer = () => {
    return (
        <div>
            <div className="card main">
                <div className="card-body">
                    <div className="card-top">
                        <CurrentWeatherContainer />
                        {/* <Forecast /> */ }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WeatherContainer;