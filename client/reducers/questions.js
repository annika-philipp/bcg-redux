const questions = (state = [], action) => {
    switch(action.type) {
        case 'RECEIVE_QUESTIONS':
            return action.questionsarray
        default:
            return state
    }
}
export default questions