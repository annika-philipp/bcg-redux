import request from 'superagent'

// export const requestScores = () => {
//     return {
//         type: 'REQUEST_SCORES'
//     }
// }

export const receiveScoresFromAPI = () => {
    return {
        type: 'RECEIVE_TOPSCORES_API',
        topScoresApi
    }
}
//done reducer but not tested


export const addNewTotalscore = (totalscore) => {
    return {
        type: 'ADD_NEW_TOTALSCORE',
        totalscore
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



export function getScoresApi (callback) {
    return(dispatch) => {
        return request
        .get('/api/v2')
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
            dispatch(receiveScoresFromAPI(topScoresApi))
        }) 
        .catch(err => {
            dispatch(showError(err.message))
        })
    }
  }
  
  export function addScoreApi (score, callback) {
    // console.log("score in api, ", score)
    return (dispatch) =>
        request
            .post('/api/v2')
            .send(score)
            .then (res => {
                dispatch(savedScore(score))
            })
            .catch(err => {
                dispatch(showError(err.message))
              })
  }

  //check esp last function, don't have savedScore in here yet!!!