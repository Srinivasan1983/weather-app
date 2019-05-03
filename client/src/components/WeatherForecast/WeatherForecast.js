import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


class WeatherForecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                country: props.weatherdata.country || '',
                location: props.weatherdata.location || ''
            }
        }
    }

    handleChange = (event) => {
        event.persist();
        this.setState(state => state.formData[event.target.name] = event.target.value)
    }

    handleClick = () => {
        this.props.fetchWeatherCallback(this.state.formData)
    }

  render() {
    return (
      <div>
        <MDBContainer>
            <MDBRow>
                <MDBCol md= "12">
                    <p className="h4 text-center mb-4">Weather Forecast Details</p>
                    <label htmlFor="inputCountry"  
                        className="grey-text">
                    Country
                    </label>
                    <input
                        type="text"
                        id="inputCountry"
                        name="country"
                        value={this.state.formData.country}
                        onChange= {this.handleChange}
                        className="form-control"
                    />
                    <br />
                    <label htmlFor="inputLocation"  
                        className="grey-text">
                    Location
                    </label>
                    <input
                        type="text"
                        id="inputLocation"
                        name="location"
                        value={this.state.formData.location}
                        onChange= {this.handleChange}
                        className="form-control"
                    />
                    <br />
                    <div className="mt-4">
                    <MDBBtn color="unique" onClick= {this.handleClick}>
                        Submit
                    </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default WeatherForecast;
