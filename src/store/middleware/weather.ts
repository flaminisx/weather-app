import { MiddlewareAPI, Dispatch } from "redux";
import { AppState } from "../reducers";
import { WeatherAction, updateWeatherSuccess, updateWeatherFailure } from "../actions/weather";
import WeatherActionType from "../constants/weather";
import WeatherData from "../types/WeatherData";
import Metrics from "../types/Metrics";

type StoreAPI = MiddlewareAPI<Dispatch, AppState>;

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const mapResponseToWeather = (res: any): WeatherData => ({
  temperature: res.main.temp,
  sky: res.weather[0].main,
  pressure: res.main.pressure,
  humidity: res.main.humidity,
  wind: {
    speed: res.wind.speed,
    deg: res.wind.deg
  },
});

const metricsDict = {
  [Metrics.KELVIN]: 'default',
  [Metrics.CELSIUS]: 'metric',
  [Metrics.FAHRENHEIT]: 'imperial',
};

const fetchWeather = (city: string, metric: Metrics) => 
  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=${metricsDict[metric]}`)
  .then(resp => {
    if(resp.status === 200) {
      return resp.json()
    } else {
      throw new Error('Bad server response');
    }
  });

const weatherMiddleware = (store: StoreAPI) => (next: Dispatch) => (
  action: WeatherAction
) => {
  next(action);
  switch (action.type) {
    case WeatherActionType.UPDATE: {
      const { city, metric } = action.payload;
      fetchWeather(city, metric)
        .then((data: WeatherData) => updateWeatherSuccess(mapResponseToWeather(data)))
        .catch((e: Error) => updateWeatherFailure(e))
        .then((action: WeatherAction) => store.dispatch(action));
      break;    
   }
    default:
      break;
  }
};

export default weatherMiddleware;
