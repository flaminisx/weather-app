import { combineReducers } from 'redux'
import weather, { WeatherState } from './weather';

export type AppState = WeatherState;

const appReducer = combineReducers({
  weather
})

export default appReducer;
