const questions = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
      return action.questionsarray
    case 'SHOW_ERROR':
      return 'Oh no an error'
    default:
      return state
  }
}
export default questions
