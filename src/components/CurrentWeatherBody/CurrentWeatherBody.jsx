import React from 'react';
import "./CurrentWeatherBody.css";

const CurrentWeatherBody = (props) => {
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
                                <div className="col-md-6"></div>
                                <div className="col-md-6 weather-details d-flex flex-column align-items-start"></div>
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