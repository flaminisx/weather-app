import { connect } from 'react-redux';
import Filters from '../../components/App/Filters';
import { updateWeather } from '../../store/actions/weather';

const FiltersContainer = connect(null, {
  onChange: updateWeather
})(Filters);

export default FiltersContainer;
