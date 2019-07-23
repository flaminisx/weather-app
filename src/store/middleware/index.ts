import { createStore, applyMiddleware, compose } from 'redux';

const composeWithDevTools = () => 
  process.env.NODE_ENV === 'development' 
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    : compose

const createAppMiddleware = () => applyMiddleware(composeWithDevTools())

export default createAppMiddleware;
