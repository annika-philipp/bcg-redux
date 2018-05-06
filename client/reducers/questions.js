// questions: [],
// question: '',
// answers: [],
// currentQuestionObject: null, 
// index: 0,

const questions = (state = [], action) => {
    switch(action.type) {
        case 'RECEIVE_QUESTIONS':
            return action.questionsobject
        default:
            return state
    }
}
export default questions