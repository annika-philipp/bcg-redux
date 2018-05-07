// totalscore: 0, - add to totalscore
// topScores: [], - receive scores
// isPositiveScore: true, - is positive score
// isTopScore: false,
// scoreIncreased: true

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
            // let newState= Object.assign({},state,{totalScore: (state.totalScore + action.scoreValue)});
            let newState= {...state, totalScore: (state.totalScore + action.scoreValue)};
            return newState;  
        return action.scoreValue
            // if (state.totalScore = null) 
            // totalScore: action.scoreValue
            // return totalScore
            // if (state.totalScore > 0) 
            // totalScore: state.totalScore + action.scoreValue
            // return totalscore
        // case 'IS_POSITIVE_TOTALSCORE': //to see if game over or not
        //     return (action.totalScore > 0) //to return true
        // case 'IS_TOPSCORE': // to see if to add to Scoreboard
        //     return (action.totalScore > topScores[9]) //to return true if larger than current 10th score 
        // case 'SCORE_INCREASED': //to change colour of score
        //     return (action.score > 0) // to return true for yes (green: red)

        default:
            return state
    }
}


export default score

