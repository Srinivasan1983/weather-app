import React, { Component } from 'react'
import { MDBContainer } from "mdbreact";
import WeatherForecastDisplay  from './WeatherForecast/WeatherForecastDisplay'

class App extends Component {
  render() {
    return (
      <MDBContainer>
      <div className="mx-auto">
        <WeatherForecastDisplay />
      </div>
    </MDBContainer>
    )
  }
}

export default App