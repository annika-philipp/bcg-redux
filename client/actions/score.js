import request from 'superagent'


export const receiveScoresFromAPI = (topScoresApi) => {
    return {
        type: 'RECEIVE_TOPSCORES_API',
        topScoresApi
    }
}
//done reducer but not tested


export const addNewTopScore = (score) => {
    console.log("Hi ", score.name, score.score)
    return {
        type: 'ADD_NEW_TOPSCORE',
        score
    }
}
//to do and test


export const addToTotalscore = (scoreValue) => {
    return {
        type: 'ADD_TO_TOTALSCORE',
        scoreValue
    }
}
//reducer done and tested

export const isPositiveTotalscore = () => {
    return {
        type: 'IS_POSITIVE_TOTALSCORE',
    }
}
//reducer done and tested, but not sure if test is right?

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

//not yet tested

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
    return(dispatch) => {
        return request
        .get('/api/v2')
        .then(items => {
            console.log("hitting the scores api")
            console.log("items.body ", items.body)
            let data  = items.body
            let scoreList = data.sort(function(a,b) {
                return b.score - a.score
            })
            var topScoresApi = []
            for (var i = 0; i < 10; i++){
                topScoresApi.push(scoreList[i])
            }
            // console.log({scoreList})
            console.log("Api Topscores, ", topScoresApi)
            dispatch(receiveScoresFromAPI(topScoresApi))
        }) 
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }
  
  export function addScoreApi (score, callback) {
    console.log("score in api, ", score)
    return (dispatch) =>
        request
            .post('/api/v2')
            .send(score)
            .then (res => {
                dispatch(addNewTopScore(score))
            })
            .catch(err => {
                dispatch(showError(err.message))
              })
  }

  //check esp last function, don't have savedScore in here yet!!!