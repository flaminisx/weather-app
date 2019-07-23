import React, { useState, useEffect } from 'react';
import Metrics from '../../store/types/Metrics';
import Picker from '../common/Picker';
import injectSheet from 'react-jss';

interface Props {
  onChange: (city: string, metrics: Metrics) => void;
  classes: any;
}

const styles = {
  wrapper: {
    display: 'flex',
    'justify-content': 'space-between',
    'margin-bottom': '15px',
    'padding-bottom': '0',
  },
  picker: {
    margin: 5
  }
}

const metrics = {
  [Metrics.KELVIN]: 'Kelvin',
  [Metrics.CELSIUS]: 'Celsius',
  [Metrics.FAHRENHEIT]: 'Fahrenheit',
}

const cities = ['London', 'Kiev', 'Stockholm'];

const Filters: React.FC<Props> = ({ onChange, classes }) => {
  const [city, setCity] =  useState(0);
  const [metric, setMetric] =  useState(Metrics.CELSIUS);

  useEffect(() => {
    onChange(cities[city as any], metric);
  }, [city, metric]);

  return (
    <div className={classes.wrapper}>
      <Picker
        className={classes.picker}
        data={cities as Record<number, string>}
        selected={city}
        onChange={(v) => setCity(v as number)}
      />
      <Picker
        className={classes.picker}
        data={metrics}
        selected={metric}
        onChange={(m) => setMetric(m as Metrics)}
      />
    </div>
  );
}

export default injectSheet(styles)(Filters);
