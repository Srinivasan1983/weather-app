import Axios from 'axios';

import {FETCHED_WEATHER, FETCHING_WEATHER, FETCHING_WEATHER_ERROR } from './modelWeatherActionsTypes';

export const fetchWeather = (weatherInfo) => async (dispatch) => {
    
    dispatch({ type: FETCHING_WEATHER });
    const location = weatherInfo.location || "chennai"
    const country  = weatherInfo.country  || "india"

    try {
        const response = await Axios.post('http://localhost:3001/api/v1/forecast/history', {
            "location": location,
            "country": country
        })
        if (response.statusText === "OK") {
            dispatch({ type: FETCHED_WEATHER, payload: response.data });
        } else {
            dispatch({ type: FETCHING_WEATHER_ERROR, payload: "No Data..." });
        }
    } catch (error) {
        console.log(error);
        dispatch({ type: FETCHING_WEATHER_ERROR, payload: error });
    }
}