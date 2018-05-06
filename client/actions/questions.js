// questions: [],
// question: '',
// answers: [],
// currentQuestionObject: null, 
// index: 0,

import request from 'superagent'

export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const requestQuestions = () => {
    return {
        type: REQUEST_QUESTIONS
    }
}

export const receiveQuestions = () => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function fetchQuestions () {
    return(dispatch) => {
        dispatch(requestQuestions())
        return request
        .get('/api/v1')
        .then(res => {
            dispatch(receiveQuestions(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}