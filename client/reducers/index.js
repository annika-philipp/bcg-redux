import {combineReducers} from 'redux'
// import gameState from './gameState'
import questions from './questions'
import index from './indexReducer'

export default combineReducers({
// gameState
questions,
index: index
})