import {combineReducers} from 'redux'
// import gameState from './gameState'
import questions from './questions'
import indexReducer from './indexReducer'

export default combineReducers({
// gameState
questions,
index: indexReducer
})