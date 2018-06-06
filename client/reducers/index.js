import {combineReducers} from 'redux'
import questions from './questions'
import index from './indexReducer'
import location from './location'
import score from './score'

export default combineReducers({
  questions,
  index,
  location,
  score
})
