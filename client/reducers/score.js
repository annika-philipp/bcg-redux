const initialState = {
  totalScore: 0,
  topScores: [],
  isPositiveTotalScore: true,
  isTopScore: false,
  scoreIncreased: false
}

const score = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_TOPSCORES_API': // from api
      return Object.assign({}, state, {topScores: action.topScoresApi})
    case 'ADD_NEW_TOPSCORE': // adds to topScores array
      let allTopScores = [...state.topScores, action.topScore]
      let newTopScores = allTopScores.sort(function (a, b) {
        return b.score - a.score
      })
      let eleventhScore = newTopScores.pop()
      return Object.assign({}, state, {topScores: newTopScores})
    case 'ADD_TO_TOTALSCORE': // adds new value to currentscore (goes up or down)
      return Object.assign({}, state, {totalScore: (state.totalScore + action.scoreValue)})
      // return { ...state, totalScore: (state.totalScore + action.scoreValue)}
    case 'SCORE_INCREASED': // to change colour of score
      return Object.assign({}, state, {scoreIncreased: (action.scoreValue > 0)})
    case 'IS_POSITIVE_TOTALSCORE': // to see if game over or not
      return Object.assign({}, state, {isPositiveTotalScore: (state.totalScore > 0)})
    case 'IS_TOPSCORE': // to see if to add to Scoreboard
      return Object.assign({}, state, {isTopScore: (action.totalScore > state.topScores[9].score)}) //to return true if larger than current 10th score 
    case 'RESET':
      return initialState
    case 'SHOW_ERROR':
      return 'Oh no an error'
    default:
      return state
  }
}

export default score
