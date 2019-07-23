import WeatherApi, { CityName, Metrics, WeatherData } from "./WeatherApi";

const metricsDict = {
  [Metrics.KELVIN]: 'default',
  [Metrics.CELSIUS]: 'metric',
  [Metrics.FAHRENHEIT]: 'imperial',
};

class OpenWeatherApiProvider implements WeatherApi{
  get(city: CityName, metric: Metrics): Promise<WeatherData> {
    throw new Error("Method not implemented.");
  }
  
}

export default OpenWeatherApiProvider;
