import {currentTaskReducer, countRightAnswersReducer, countPoints, countCoins} from './counter';
import dataLessons from './initState';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers ({
  routing: routerReducer,
  currentTask: currentTaskReducer,
  countRightAnswers: countRightAnswersReducer,
  countPoints: countPoints,
  countCoins: countCoins,
  dataLessons: dataLessons
});
