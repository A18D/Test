import counterReducer from './counter';
import dataLessons from './initState';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers ({
  routing: routerReducer,
  currentTask: counterReducer,
  dataLessons: dataLessons
});
