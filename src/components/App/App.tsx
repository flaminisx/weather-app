import React from 'react';
import injectSheet from 'react-jss';
import WeatherContainer from '../../containers/weather/WeatherContainer';
import FiltersContainer from '../../containers/weather/FiltersContainer';

const styles = {
  app: {
    width: '100vw',
    height: '80vh',
    display: 'flex',
    'max-width': '100%',
    'justify-content': 'center',
    'align-items': 'center',
  },
  wrapper: {

  }
}

const App: React.FC<any> = ({ classes }) => {
  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <FiltersContainer />
        <WeatherContainer />
      </div>
    </div>
  );
}

export default injectSheet(styles)(App);
