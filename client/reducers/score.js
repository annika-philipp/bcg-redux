
const initialState = {
    totalScore: 0,
    topScores: [],
    isPositiveScore: true,
    isTopScore: false,
    scoreIncreased: false

}

const score = (state = initialState, action) => {
    switch(action.type) {
        // case 'RECEIVE_SCORES': //from api/db
        //     return action.scores
        // case 'ADD_NEW_TOTALSCORE':  //to api/db and back
        //     return
        case 'ADD_TO_TOTALSCORE': //adds new value to currentscore (goes up or down)
            return Object.assign({}, state, {totalScore: (state.totalScore + action.scoreValue)})
            // return { ...state, totalScore: (state.totalScore + action.scoreValue)}
        case 'IS_POSITIVE_TOTALSCORE': //to see if game over or not
            if (state.totalScore > 0)
        //     console.log("reducer, ", state.totalScore)
            return Object.assign({}, state, {isPositiveScore: true})
        // case 'IS_TOPSCORE': // to see if to add to Scoreboard
        //     return (action.totalScore > topScores[9]) //to return true if larger than current 10th score 
        case 'SCORE_INCREASED': //to change colour of score
            return Object.assign({}, state, {scoreIncreased: (action.scoreValue > 0)})
        default:
            return state
    }
}


export default score

