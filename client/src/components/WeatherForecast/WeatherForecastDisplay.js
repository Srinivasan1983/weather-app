import React, { Component } from 'react'
import { connect } from 'react-redux'

import WeatherForecast from './WeatherForecast';
import WeatherForecastTable from './WeatherForecastTable';
import { fetchWeather } from '../../redux/actions/modelWeatherActions';


const mapStateToProps = (storeData) => {
    return {weatherForecastDetails: storeData.weather}
}

const mapDispatchToProps = {
    fetchWeatherCallback: fetchWeather
}

class WeatherForecastDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {weatherdata: ''}
    }

    fetchWeatherForecast = (weatherdata) => {
        this.props.fetchWeatherCallback(weatherdata);
    }

  render() {
        return (
            <div>
                <WeatherForecast 
                fetchWeatherCallback={ this.fetchWeatherForecast }
                weatherdata = {this.state.weatherdata} />
                <hr />
                <WeatherForecastTable 
                 forecastDetails = {this.props.weatherForecastDetails}/>
            </div>
        )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForecastDisplay);