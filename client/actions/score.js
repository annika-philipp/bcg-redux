import request from 'superagent'

export const requestScores = () => {
    return {
        type: 'REQUEST_SCORES'
    }
}

export const receiveScores = () => {
    return {
        type: 'RECEIVE_SCORES',
        scores
    }
}

export const addNewTotalscore = (totalscore) => {
    return {
        type: 'ADD_NEW_TOTALSCORE',
        totalscore
    }
}

export const addToTotalscore = (score) => {
    return {
        type: 'ADD_TO_TOTALSCORE',
        score
    }
}

export const isPositiveTotalscore = (totalScore) => {
    return {
        type: 'IS_POSITIVE_SCORE',
        totalScore
    }
}

export const isTopScore = (totalScore) => {
    return {
        type: 'IS_TOPSCORE',
        totalScore
    }
}

export const scoreIncreased = (score) => {
    return {
        type: 'SCORE_INCREASED',
        score
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