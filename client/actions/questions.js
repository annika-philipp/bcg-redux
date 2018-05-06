
// answers: [],
// currentQuestionObject: null, 

import request from 'superagent'


export function receiveQuestions(questionsarray) {
    return {
        type: 'RECEIVE_QUESTIONS',
        questionsarray
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

export function increaseIndex (num, questions) {
    return {
        type: 'INCREASE_INDEX',
        num
        // num,
        // questions
    }
}

