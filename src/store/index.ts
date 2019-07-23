import { createStore } from 'redux'
import appReducer from './reducers';
import createAppMiddleware from './middleware';

export default () => {
  return createStore(appReducer, createAppMiddleware);
}
