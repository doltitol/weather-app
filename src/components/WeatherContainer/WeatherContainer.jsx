import React from 'react';
import Search from '../Search/Search';
// import CurrentWeatherContainer from '../CurrentWeatherContainer/CurrentWeatherContainer';
import Footer from '../Footer/Footer';
// import Forecast from '../Forecast/Forecast';
// import Search from '../Search/Search';
import './WeatherContainer.css';
import CurrentWeatherContainer from '../CurrentWeatherContainer/CurrentWeatherContainer';

const WeatherContainer = () => {
    return (
        <div>
            <div className="card main">
                <div className="card-body">
                    <div className="card-top">
                        <Search />
                        <CurrentWeatherContainer />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default WeatherContainer