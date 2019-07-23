export type CityName = string;

export enum Metrics {
  KELVIN = 'kelvin',
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
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

interface WeatherApi {
  get(city: CityName, metric: Metrics): Promise<WeatherData>
}

export default WeatherApi;
