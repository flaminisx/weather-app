import React from 'react';
import WeatherData from '../../store/types/WeatherData';

import loadingSpinner from '../img/loading.gif';

interface WeatherProps {
  data: WeatherData,
  loading: boolean,
  loaded: boolean 
}

const Weather: React.FC<WeatherProps> = ({loaded, loading, data}) => {
  if (!loaded) {
    if (loading) {
      return <img src={loadingSpinner} alt=''/>
    } else {
      return <React.Fragment/>;
    } 
  }
  return (
    <div>
      <div>Status: <span>{data.sky}</span></div>
      <div>Temperature: <span>{data.temperature}°</span></div>
      <div>Pressure: <span>{data.pressure}</span></div>
      <div>Humidity: <span>{data.humidity}</span></div>
      <div>Wind: <span>{data.wind.speed}, {data.wind.deg}°</span></div>
    </div>
  );
};

export default Weather;
