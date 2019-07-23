import { MiddlewareAPI, Dispatch } from "redux";
import { AppState } from "../reducers";
import { WeatherAction, updateWeatherSuccess, updateWeatherFailure } from "../actions/weather";
import WeatherActionType, { WeatherData } from "../constants/weather";

type StoreAPI = MiddlewareAPI<Dispatch, AppState>;

const API_KEY = process.env.API_KEY;
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const fetchWeather = (city: string, metric: string) => 
  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=${metric}`)
  .then(resp => {
    if(resp.status === 200) {
      return resp.json()
    } else {
      throw new Error('Bad server response');
    }
  });

export default (store: StoreAPI) => (next: Dispatch) => (
  action: WeatherAction
) => {
  switch (action.type) {
    case WeatherActionType.UPDATE: {
      const { city, metric } = action.payload;
      fetchWeather(city, metric)
        .then((data: WeatherData) => updateWeatherSuccess(data))
        .catch(e => updateWeatherFailure(e))
        .then((action: WeatherAction) => store.dispatch(action));
    }
    default:
      next(action);
  }
};
