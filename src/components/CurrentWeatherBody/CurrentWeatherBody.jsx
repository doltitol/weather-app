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
                </div>
            </div>
        </div>
    )
}

export default CurrentWeatherBody