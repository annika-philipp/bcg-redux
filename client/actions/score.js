// totalscore: 0, - add to totalscore
// topScores: [], - receive scores
// isPositiveScore: true, - is positive score
// isTopScore: false,
// scoreIncreased: true

import request from 'superagent'

export const REQUEST_SCORES = 'REQUEST_SCORES'
export const RECEIVE_SCORES = 'RECEIVE_SCORES'
export const ADD_NEW_TOTALSCORE = 'ADD_NEW_TOTALSCORE'
export const ADD_TO_TOTALSCORE = 'ADD_TO_TOTALSCORE'
export const IS_POSITIVE_SCORE = 'IS_POSITIVE_SCORE'
export const IS_TOPSCORE = 'IS_TOPSCORE'
export const SCORE_INCREASED = 'SCORE_INCREASED'

export const requestScores = () => {
    return {
        type: REQUEST_SCORES
    }
}

export const receiveScores = () => {
    return {
        type: RECEIVE_SCORES,
        scores
    }
}

export const addNewTotalscore = (totalscore) => {
    return {
        type: ADD_NEW_TOTALSCORE,
        totalscore
    }
}

export const addToTotalscore = (score) => {
    return {
        type: ADD_TO_TOTALSCORE,
        score
    }
}

export const isPositiveScore = (score) => {
    return {
        type: IS_POSITIVE_SCORE,
        score
    }
}

export const isTopScore = (score) => {
    return {
        type: IS_TOPSCORE,
        score
    }
}

export const scoreIncreased = (score) => {
    return {
        type: SCORE_INCREASED
    }
}


export function fetchScores () {
    return(dispatch) => {
        dispatch(requestSores())
        return request
        .get('/api/v2')
        .then(res => {
            dispatch(receiveScores(res.body))
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
}


export function getScoresApi (callback) {
    request
    .get(scores)
    .then(items => {
      // console.log("items.body ", items.body)
      let data  = items.body
      let scoreList = data.sort(function(a,b) {
        return b.score - a.score
      })
      var topScoresApi = []
      for (var i = 0; i < 10; i++){
        topScoresApi.push(scoreList[i])
      }
      // console.log({scoreList})
      // console.log("Api Topscores, ", topScoresApi)
      callback(topScoresApi)
    }) 
  }
  
  export function addScoreApi (score, callback) {
    // console.log("score in api, ", score)
    request
    .post(scores)
    .send(score)
    .end((err, res) => {
      callback(res)
    })
  }