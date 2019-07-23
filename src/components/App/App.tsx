import React, { useEffect, useState } from 'react';

const API_KEY = 'ab612ebf5375d77352246f16e80ad5c7';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
type CityName = string;

enum Metrics {
  KELVIN = 'default',
  CELSIUS = 'metric',
  FAHRENHEIT = 'imperial',
};
interface MetricDict {
  [x: string]: Metrics;
}
const metrics: MetricDict = {
  Kelvin: Metrics.KELVIN,
  Celsius: Metrics.CELSIUS,
  Fahrenheit: Metrics.FAHRENHEIT,
}
const metricsNames = Object.keys(metrics);
const cities = ['London', 'Kiev', 'Stockholm'];

const fetchWeather = (city: CityName, metric: Metrics) => fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=${metric}`)

const App: React.FC = () => {
  const [city, setCity] =  useState(cities[0]);
  const [metric, setMetric] =  useState(metricsNames[0]);
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    fetchWeather(city, metrics[metric]).then(r => r.json()).then((data: any) => {
      setTemp(data.main.temp);
    }); 
  }, [city, metric]);
  return (
    <div className="App">
      <select name="city" onChange={(e) => setCity(e.target.value)}>
        { cities.map(city => <option value={city}>{city}</option>)}
      </select>
      <select name="metrics" onChange={(e) => setMetric(e.target.value)}>
        { metricsNames.map(m => <option value={m}>{m}</option>)}
      </select>
      <div>{temp}</div>
    </div>
  );
}

export default App;
