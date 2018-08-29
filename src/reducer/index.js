import counterReducer from './counter'
import { combineReducers } from 'redux'

export default combineReducers({
    count: counterReducer
})