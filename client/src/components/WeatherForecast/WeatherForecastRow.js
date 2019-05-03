import React from 'react'

const WeatherForecastRow = (props) => {
    const {details} = props;
  return (
    <div>
        <div className="card" >
            <div className="card-body card-align">
                <h5 className="card-title">Date: {details.dt_txt}</h5>
                <p className="card-text"><strong>Temp:</strong> {details.main.temp} &#8451;</p>
                <p className="card-text"><strong>Wind:</strong> {details.wind.speed}</p>
                <p className="card-text"><small className="text-muted">Last updated 10 mins ago</small></p>
            </div>
        </div>
    </div>
  )
}
export default WeatherForecastRow;
