const Axios = require('axios');
const { makeError } = require('../middlewares/error')

const getWeatherForecast = async (location, country, units) => {
    const API = `${process.env.API_BASE_URL}?q=${location, country}&units=${units}&appid=${process.env.API_KEY}`;
    try {
        const response = await Axios.get(API)

        if (response.statusText === 'OK') {
            return response
        }   
    } catch (error) {
        return makeError(error)
    }
  }

module.exports = {
    getWeatherForecast
}