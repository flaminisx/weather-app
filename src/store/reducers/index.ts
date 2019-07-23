import { combineReducers } from 'redux'
import weather, { WeatherState } from './weather';

export interface AppState{
  weather: WeatherState;
} 

const appReducer = combineReducers({
  weather
})

export default appReducer;
