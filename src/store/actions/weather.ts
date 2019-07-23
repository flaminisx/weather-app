import WeatherActionType, { WeatherData } from "../constants/weather";

export interface UpdateWeatherAction {
  type: WeatherActionType.UPDATE;
  payload: {
    city: string,
    metric: string
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

export const updateWeather = (city: string, metric: string): UpdateWeatherAction => ({
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
