import React from 'react';
import WeatherContainer from '../../containers/weather/WeatherContainer';
import FiltersContainer from '../../containers/weather/FiltersContainer';

const App: React.FC = () => {

  return (
    <div className="App">
      <FiltersContainer />
      <WeatherContainer />
    </div>
  );
}

export default App;
