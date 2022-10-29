import React from 'react';
import './ForecastDay.css';

const ForecastDay = (props) => {
    return (
        <div className="col-12 col-sm py-2">
            <div className="card next-day">
                <div className="card-body">
                    <h3>{ props.day }</h3>
                    <img
                        src={ `http://openweathermap.org/img/wn/${ props.icon }@2x.png` }
                        alt={ props.desc }
                        className="icon"
                    />
                    <p>
                        <span id="lower-temp">{ Math.round(props.lowerTemp) }°C</span>|{ " " }
                        <span id="higher-temp">{ Math.round(props.higherTemp) }°C</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForecastDay