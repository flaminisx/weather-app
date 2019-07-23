interface WeatherData {
  temperature: number;
  sky: string;
  pressure: number;
  humidity: number;
  wind: {
    speed: number;
    deg: number
  };
}

export default WeatherData;
