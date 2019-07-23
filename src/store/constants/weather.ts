const enum WeatherActionType {
  UPDATE = 'WEATHER_UPDATE',
  UPDATE_SUCCESS = 'WEATHER_UPDATE_SUCCESS',
  UPDATE_FAILURE = 'WEATHER_UPDATE_FAILURE',
};

export interface WeatherData {
  temperature: number,
  sky: string,
  pressure: number,
  humidity: number,
  wind: {
    speed: number,
    deg: number
  },
}

export default WeatherActionType;
