import request from 'superagent'

export const receiveScoresFromAPI = (topScoresApi) => {
  return {
    type: 'RECEIVE_TOPSCORES_API',
    topScoresApi
  }
}

export const addNewTopScore = (topScore) => {
  return {
    type: 'ADD_NEW_TOPSCORE',
    topScore
  }
}

export const addToTotalscore = (scoreValue) => {
  return {
    type: 'ADD_TO_TOTALSCORE',
    scoreValue
  }
}

export const isPositiveTotalscore = () => {
  return {
    type: 'IS_POSITIVE_TOTALSCORE'
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const isTopScore = (totalScore) => {
  return {
    type: 'IS_TOPSCORE',
    totalScore
  }
}

export const scoreIncreased = (scoreValue) => {
  return {
    type: 'SCORE_INCREASED',
    scoreValue
  }
}

export const showError = (message) => {
  return {
    type: 'SHOW_ERROR',
    message
  }
}

export function getScoresApi (callback) {
  return (dispatch) => {
    return request
      .get('/api/scores')
      .then(items => {
        // console.log("hitting the scores api")
        // console.log("items.body ", items.body)
        let data = items.body
        let scoreList = data.sort(function (a, b) {
          return b.score - a.score
        })
        var topScoresApi = []
        for (var i = 0; i < 10; i++) {
          topScoresApi.push(scoreList[i])
        }
        // console.log({scoreList})
        // console.log("Api Topscores, ", topScoresApi)
        dispatch(receiveScoresFromAPI(topScoresApi))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function addScoreApi (topScore) {
  // console.log("score in api, ", topScore)
  return (dispatch) =>
    request
      .post('/api/scores')
      .send(topScore)
      .then(dispatch(addNewTopScore(topScore)))
      .catch(err => {
        dispatch(showError(err.message))
      })
}
