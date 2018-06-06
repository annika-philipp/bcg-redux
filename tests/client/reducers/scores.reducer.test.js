import score from '../../../client/reducers/score'

test('Score Reducer initial state', () => {
  const expected = {
    totalScore: 0,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }
  const action = {}

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})
  
test('ADD_TO_TOTALSCORE adds new score value to totalscore', () => {
  const scoreValue = 10
  const expected = {
    totalScore: 10,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'ADD_TO_TOTALSCORE',
    scoreValue
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})

test('RECEIVE_TOPSCORES_API adds topscores array to state', () => {
  const topScoresApi = [{name: 'Kelly', score: 100}, {name: 'Ross', score: 110}]
  const expected = {
    totalScore: 0,
    topScores: [{name: 'Kelly', score: 100}, {name: 'Ross', score: 110}],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'RECEIVE_TOPSCORES_API',
    topScoresApi
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})

test('ADD_NEW_TOPSCORE adds new topscore to topScores array in state', () => {
  const topScore = {name: 'Kelly', score: 100}
  const state = {
    totalScore: 0,
    topScores: [
      {name: 'Kelly', score: 140}, 
      {name: 'Ross', score: 130},
      {name: 'Kelly', score: 120}, 
      {name: 'Ross', score: 110},
      {name: 'Kelly', score: 90}, 
      {name: 'Ross', score: 80},
      {name: 'Kelly', score: 70}, 
      {name: 'Ross', score: 60},
      {name: 'Kelly', score: 50}, 
      {name: 'Ross', score: 45}
    ],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const expected = {
    totalScore: 0,
    topScores: [
      {name: 'Kelly', score: 140}, 
      {name: 'Ross', score: 130},
      {name: 'Kelly', score: 120}, 
      {name: 'Ross', score: 110},
      {name: 'Kelly', score: 100},
      {name: 'Kelly', score: 90}, 
      {name: 'Ross', score: 80},
      {name: 'Kelly', score: 70}, 
      {name: 'Ross', score: 60},
      {name: 'Kelly', score: 50}, 
    ],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'ADD_NEW_TOPSCORE',
    topScore
  }

  const actual = score(state, action)

  expect(actual).toEqual(expected)
})

test('IS_POSITIVE_TOTALSCORE returns true if positive totalscore', () => {

  const testState = {
    totalScore: 10,
    topScores: [],
    isPositiveTotalScore: false,
    isTopScore: false,
    scoreIncreased: false
  }

  const expected = {
    totalScore: 10,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'IS_POSITIVE_TOTALSCORE',
  }

  const actual = score(testState, action)

  expect(actual).toEqual(expected)
})

test('IS_POSITIVE_TOTALSCORE returns false if negative totalscore', () => {

  const testState = {
    totalScore: -10,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const expected = {
    totalScore: -10,
    topScores: [],
    isPositiveTotalScore: false,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'IS_POSITIVE_TOTALSCORE',
  }

  const actual = score(testState, action)

  expect(actual).toEqual(expected)
})

test('SCORE_INCREASED returns true if positive', () => {
  const scoreValue = 10
  const expected = {
    totalScore: 0,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: true
  }

  const action = {
    type: 'SCORE_INCREASED',
    scoreValue
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})

test('SCORE_INCREASED returns false if negative scoreValue', () => {
  const scoreValue = -10
  const expected = {
    totalScore: 0,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'SCORE_INCREASED',
    scoreValue
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})

test('IS_TOPSCORE returns true if score is 160', () => {
  const totalScore = 160

  const initialState = {
    totalScore: 0,
    topScores: [
      {id: 1, user_id: 1, score: 80, name: 'Player1'},
      {id: 2, user_id: 2, score: 75, name: 'Player1'},
      {id: 3, user_id: 3, score: 70, name: 'Player1'},
      {id: 4, user_id: 4, score: 65, name: 'Player1'},
      {id: 5, user_id: 5, score: 60, name: 'Player1'},
      {id: 6, user_id: 6, score: 55, name: 'Player1'},
      {id: 7, user_id: 7, score: 50, name: 'Player1'},
      {id: 8, user_id: 8, score: 45, name: 'Player1'},
      {id: 9, user_id: 9, score: 40, name: 'Player1'},
      {id: 10, user_id: 10, score: 35, name: 'Player1'}
    ],
    isPositiveTotalScore: false,
    isTopScore: false,
    scoreIncreased: false
  }

  const expected = {
    totalScore: 0,
    topScores: [
      {id: 1, user_id: 1, score: 80, name: 'Player1'},
      {id: 2, user_id: 2, score: 75, name: 'Player1'},
      {id: 3, user_id: 3, score: 70, name: 'Player1'},
      {id: 4, user_id: 4, score: 65, name: 'Player1'},
      {id: 5, user_id: 5, score: 60, name: 'Player1'},
      {id: 6, user_id: 6, score: 55, name: 'Player1'},
      {id: 7, user_id: 7, score: 50, name: 'Player1'},
      {id: 8, user_id: 8, score: 45, name: 'Player1'},
      {id: 9, user_id: 9, score: 40, name: 'Player1'},
      {id: 10, user_id: 10, score: 35, name: 'Player1'}
    ],
    isPositiveTotalScore: false,
    isTopScore: true,
    scoreIncreased: false
  }

  const action = {
    type: 'IS_TOPSCORE',
    totalScore
  }

  const actual = score(initialState, action)

  expect(actual).toEqual(expected)
})

test('IS_TOPSCORE returns false if score is 30', () => {
  const totalScore = 30

  const initialState = {
    totalScore: 0,
    topScores: [
      {id: 1, user_id: 1, score: 80, name: 'Player1'},
      {id: 2, user_id: 2, score: 75, name: 'Player1'},
      {id: 3, user_id: 3, score: 70, name: 'Player1'},
      {id: 4, user_id: 4, score: 65, name: 'Player1'},
      {id: 5, user_id: 5, score: 60, name: 'Player1'},
      {id: 6, user_id: 6, score: 55, name: 'Player1'},
      {id: 7, user_id: 7, score: 50, name: 'Player1'},
      {id: 8, user_id: 8, score: 45, name: 'Player1'},
      {id: 9, user_id: 9, score: 40, name: 'Player1'},
      {id: 10, user_id: 10, score: 35, name: 'Player1'}
    ],
    isPositiveTotalScore: false,
    isTopScore: false,
    scoreIncreased: false
  }

  const expected = {
    totalScore: 0,
    topScores: [
      {id: 1, user_id: 1, score: 80, name: 'Player1'},
      {id: 2, user_id: 2, score: 75, name: 'Player1'},
      {id: 3, user_id: 3, score: 70, name: 'Player1'},
      {id: 4, user_id: 4, score: 65, name: 'Player1'},
      {id: 5, user_id: 5, score: 60, name: 'Player1'},
      {id: 6, user_id: 6, score: 55, name: 'Player1'},
      {id: 7, user_id: 7, score: 50, name: 'Player1'},
      {id: 8, user_id: 8, score: 45, name: 'Player1'},
      {id: 9, user_id: 9, score: 40, name: 'Player1'},
      {id: 10, user_id: 10, score: 35, name: 'Player1'}
    ],
    isPositiveTotalScore: false,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'IS_TOPSCORE',
    totalScore
  }

  const actual = score(initialState, action)

  expect(actual).toEqual(expected)
})

test('RESET resets state to ititalState', () => {

  const expected = {
    totalScore: 0,
    topScores: [],
    isPositiveTotalScore: true,
    isTopScore: false,
    scoreIncreased: false
  }

  const action = {
    type: 'RESET'
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})

test('SHOW_ERROR brings up error message', () => {

  const expected = 'Oh no an error'

  const action = {
    type: 'SHOW_ERROR'
  }

  const actual = score(undefined, action)

  expect(actual).toEqual(expected)
})
