import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';
import randomId from '../middlewares/randomId';
import {logger, crashReporter} from '../middlewares/logger';

const enhancer = applyMiddleware (
  thunk,
  routerMiddleware (history),
  randomId,
  logger,
  crashReporter
);

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store;
export default store;