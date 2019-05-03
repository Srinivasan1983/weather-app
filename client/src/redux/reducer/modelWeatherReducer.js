import {FETCHED_WEATHER, FETCHING_WEATHER, FETCHING_WEATHER_ERROR } from '../actions/modelWeatherActionsTypes';
import initialData from '../store/initialData';

export default (storeData = initialData.stateData, action) => {
    switch(action.type) {
        case FETCHING_WEATHER:
            return { ...storeData, fetchingWeather: true };
        case FETCHED_WEATHER:
            return { ...storeData, fetchingWeather: false, weather: action.payload };
        case FETCHING_WEATHER_ERROR:
            return { ...storeData, fetchingWeather: false, error: action.payload };
        default:
            return storeData || initialData.stateData
    }
}