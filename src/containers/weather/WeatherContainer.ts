import { connect } from 'react-redux';
import Weather from '../../components/App/Weather';
import { getWeatherData, isWeatherLoaded, isWeatherLoading } from '../../store/selectors/weather';
import { AppState } from '../../store/reducers';

const WeatherContainer = connect((state: AppState) => ({
  data: getWeatherData(state),
  loaded: isWeatherLoaded(state),
  loading: isWeatherLoading(state),
}))(Weather);

export default WeatherContainer;
