// questions: [],
// question: '',
// answers: [],
// currentQuestionObject: null, 
// index: 0,

import request from 'superagent'


export function receiveQuestions(questions) {
    return {
        type: 'RECEIVE_QUESTIONS',
        questions
    }
}

export function fetchQuestions() {
    return(dispatch) => {
        return request
        .get('/api/v1')
        .then(res => {
            console.log("RES BODY, ", res.body)
            dispatch(receiveQuestions(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}

export function increaseIndex (index, questions) {
    return {
        type: 'INCREASE_INDEX',
        index,
        questions

    }
}
