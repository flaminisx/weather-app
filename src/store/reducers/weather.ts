import { WeatherAction } from "../actions/weather";
import WeatherActionType from "../constants/weather";
import WeatherData from "../types/WeatherData";

export interface WeatherState {
  loading: boolean,
  loaded: boolean,
  error?: string,
  data?: WeatherData
}

const initialState: WeatherState = {
  loading: false,
  loaded: false,
};

const weather = (state = initialState, action: WeatherAction): WeatherState => {
  switch(action.type) {
    case WeatherActionType.UPDATE: {
      return {
        ...state,
        loaded: false,
        loading: true,
      }
    }
    case WeatherActionType.UPDATE_SUCCESS: {
      return {
        loaded: true,
        loading: false,
        error: undefined,
        data: action.payload
      }
    }
    case WeatherActionType.UPDATE_FAILURE: {
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload.message
      }
    }
    default: {
      return state;
    }
  }
}

export default weather;
