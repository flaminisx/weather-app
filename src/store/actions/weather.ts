import WeatherActionType from "../constants/weather";
import WeatherData from "../types/WeatherData";
import Metrics from "../types/Metrics";

export interface UpdateWeatherAction {
  type: WeatherActionType.UPDATE;
  payload: {
    city: string,
    metric: Metrics
  }
}

export interface UpdateWeatherSuccessAction {
  type: WeatherActionType.UPDATE_SUCCESS;
  payload: WeatherData;
}

export interface UpdateWeatherFailureAction {
  type: WeatherActionType.UPDATE_FAILURE;
  payload: Error;
}

export type WeatherAction = 
  | UpdateWeatherAction
  | UpdateWeatherSuccessAction
  | UpdateWeatherFailureAction;

export const updateWeather = (city: string, metric: Metrics): UpdateWeatherAction => ({
  type: WeatherActionType.UPDATE,
  payload: {
    city,
    metric
  }
});

export const updateWeatherSuccess = (data: WeatherData): UpdateWeatherSuccessAction => ({
  type: WeatherActionType.UPDATE_SUCCESS,
  payload: data
});

export const updateWeatherFailure = (err: Error): UpdateWeatherFailureAction => ({
  type: WeatherActionType.UPDATE_FAILURE,
  payload: err
});
