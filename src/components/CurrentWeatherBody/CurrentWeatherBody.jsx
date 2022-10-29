import React, { useState } from 'react';
import "./CurrentWeatherBody.css";

const CurrentWeatherBody = (props) => {
    const [ isCelsiusActive, setIsCelsiusActive ] = useState(true);
    const [ isFarenheitActive, setIsFarenheitActive ] = useState(false);

    const handleCelsiusClick = () => {
        setIsCelsiusActive(!isCelsiusActive);
        setIsFarenheitActive(!isFarenheitActive);
    }
    const handleFarenheitClick = () => {
        setIsCelsiusActive(!isCelsiusActive);
        setIsFarenheitActive(!isFarenheitActive);
    }
    return (
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        <h2>
                            { props.city }, <strong>{ props.country }</strong>
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1>
                                        { props.temperature }
                                        <span id="temp-type">
                                            <span className={ isCelsiusActive ? 'active' : null } onClick={ handleCelsiusClick }>°C</span>
                                            { " " }
                                            |
                                            <span className={ isFarenheitActive ? 'active' : null } onClick={ handleFarenheitClick }>°F</span>
                                        </span>
                                    </h1>
                                    <div>
                                        <h4 id="weather-desc">{ props.desc }</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 weather-details d-flex flex-column align-items-start">
                                    <p>
                                        <strong>Pressure: </strong>
                                        { props.pressure }hPa
                                    </p>
                                    <p>
                                        <strong>Humidity: </strong>
                                        { props.humidity }%
                                    </p>
                                    <p>
                                        <strong>Wind: </strong>
                                        { props.wind }metre/sec
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex align-items-center justify-content-center">
                            <img
                                src={ `http://openweathermap.org/img/wn/${ props.icon }@2x.png` }
                                alt={ props.desc }
                                id="icon-current"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherBody