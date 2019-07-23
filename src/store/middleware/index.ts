import { applyMiddleware, compose } from 'redux';
import weatherMiddleware from './weather';

const composeWithDevTools =
  process.env.NODE_ENV === 'development' 
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    : compose

const createAppMiddleware = () => composeWithDevTools(applyMiddleware(weatherMiddleware))

export default createAppMiddleware;
