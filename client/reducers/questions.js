// question: '',
// answers: [],
// currentQuestionObject: null, 

const questions = (state = [], action) => {
    switch(action.type) {
        case 'RECEIVE_QUESTIONS':
            return action.questionsobject
        default:
            return state
    }
}
export default questions