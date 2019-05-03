import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import modelWeatherReducer from './reducer/modelWeatherReducer';

export default createStore(modelWeatherReducer, applyMiddleware(thunk));

export { fetchWeather} from './actions/modelWeatherActions'