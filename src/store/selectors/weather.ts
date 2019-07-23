import { AppState } from "../reducers";

export const getWeatherData = (state: AppState) => state.weather.data!;

export const isWeatherLoaded = (state: AppState) => state.weather.loaded;

export const isWeatherLoading = (state: AppState) => state.weather.loading;
