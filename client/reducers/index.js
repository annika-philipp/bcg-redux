import {combineReducers} from 'redux'
import questions from './questions'
import index from './indexReducer'
import location from './location'

export default combineReducers({
questions,
index,
location
})