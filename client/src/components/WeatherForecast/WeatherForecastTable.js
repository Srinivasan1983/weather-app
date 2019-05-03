import React, { Component } from 'react'
import WeatherForecastRow from './WeatherForecastRow';

class WeatherForecastTable extends Component {
    state = { forecast: [], error: {}, status: "initial" };

    componentDidMount() {
        this.getForecastDetails();
      }

    getForecastDetails = async () => {
        this.setState({ forecast: [], status: "loading" });
        try {
            const forecast = await this.props.forecastDetails;
            this.setState({ forecast: forecast, status: "completed" });
        } catch (error) {
            this.setState({status: "error" });
        }
    };

  render() {
    return (
        <div className="wrapper">
        {this.state.status === "loading" && <h3 id="load">Loading forecast...</h3>}
        {this.state.status === "completed" && this.props.forecastDetails.length === 0 && (
          <h3 id="no-info">
            No weather information available, please get information by submitting the details above.
          </h3>
        )}
        {this.state.status === "error" && (
          <h3 id="error-info">
            An error occured while loading forecast data...please visit site
            later.
          </h3>
        )}

        {this.props.forecastDetails.map((details, index) => {
          return (
            <WeatherForecastRow key={index} details={details} />
          );
        })}
      </div>
    )
  }
}

export default (WeatherForecastTable)