import React, { useState, useEffect } from 'react';
import Metrics from '../../store/types/Metrics';
import Picker from './Picker';

interface Props {
  onChange: (city: string, metrics: Metrics) => void;
}

const metrics = {
  [Metrics.KELVIN]: 'Kelvin',
  [Metrics.CELSIUS]: 'Celsius',
  [Metrics.FAHRENHEIT]: 'Fahrenheit',
}

const cities = ['London', 'Kiev', 'Stockholm'];

const Filters: React.FC<Props> = ({ onChange }) => {
  const [city, setCity] =  useState(0);
  const [metric, setMetric] =  useState(Metrics.CELSIUS);
  useEffect(() => {
    onChange(cities[city as any], metric);
  }, [city, metric])
  return (
    <div>
      <Picker data={cities as Record<number, string>} selected={city} onChange={(v) => setCity(v as number)}/>
      <Picker data={metrics} selected={metric} onChange={(m) => setMetric(m as Metrics)}/>
    </div>
  );
}

export default Filters;
