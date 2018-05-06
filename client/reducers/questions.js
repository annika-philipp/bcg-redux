// questions: [],
// question: '',
// answers: [],
// currentQuestionObject: null, 
// index: 0,

const questions = (state = true, action) => {
    switch(action.type) {
        case 'RECEIVE_QUESTIONS':
            return action.questions
        default:
            return state
    }
}
export default questions