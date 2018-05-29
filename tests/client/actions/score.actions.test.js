import {
  addToTotalscore, 
  isPositiveScore, 
  scoreIncreased, 
  addScoreApi,
  addNewTopScore, 
  receiveScoresFromAPI, 
  isPositiveTotalscore,
  isTopScore,
  reset,
  showError,
  getScoresApi
  } from '../../../client/actions/score'

  import nock from 'nock'

test('addToTotalScore works', () => {
  const score = 10

  const expected = {
        type: 'ADD_TO_TOTALSCORE',
        scoreValue: score
  }

  const actual = addToTotalscore(score)

  expect(actual).toEqual(expected)
})

test('addNewTopScore works', () => {
  const score = 170

  const expected = {
        type: 'ADD_NEW_TOPSCORE',
        topScore: score
  }

  const actual = addNewTopScore(score)

  expect(actual).toEqual(expected)
})

// fails! also check how to actually test err message and lines 73/74
test('addScoreApi will dispatch an action on success', () => {
  const topScore = 
    {name: 'Player 1', score: 170}
  
  const scope = nock('http://localhost:80')
    .post('/api/v2')
    .reply(200, topScore);

  const expectedAction = {
        type: 'ADD_NEW_TOPSCORE',
        topScore
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

    addScoreApi()(dispatch)

})

//

test('receiveScoresFromAPI works', () => {

  const topScores = [170, 160]

  const expected = {
        type: 'RECEIVE_TOPSCORES_API',
        topScoresApi: topScores
  }

  const actual = receiveScoresFromAPI(topScores)

  expect(actual).toEqual(expected)
})


test('getScoresApi will dispatch an action on success', () => {
  const fakeScores = [
    {score: 170, name: 'Player 1'},
    {score: 160, name: 'Player 2'}
  ]

  const scope = nock('http://localhost:80')
    .get('/api/v2')
    .reply(200, fakeScores);

  const expectedAction = {
    type: 'RECEIVE_TOPSCORES_API',
    topScoresApi: fakeScores
  }

  const dispatch = jest.fn()
    .mockImplementationOnce(action => {
      expect(action).toEqual(expectedAction)
      scope.done()
    })

    getScoresApi()(dispatch)
})


test('isPositiveTotalScore works', () => {

  const expected = {
        type: 'IS_POSITIVE_TOTALSCORE',
  }

  const actual = isPositiveTotalscore()

  expect(actual).toEqual(expected)
})

test('isTopScore works', () => {
  const totalScore = 170

  const expected = {
        type: 'IS_TOPSCORE',
        totalScore
  }

  const actual = isTopScore(totalScore)

  expect(actual).toEqual(expected)
})

test('reset works', () => {

  const expected = {
        type: 'RESET',
  }

  const actual = reset()

  expect(actual).toEqual(expected)
})

test('scoreIncreased works', () => {
  const scoreValue = 20

  const expected = {
        type: 'SCORE_INCREASED',
        scoreValue
  }

  const actual = scoreIncreased(scoreValue)

  expect(actual).toEqual(expected)
})

test('showError works', () => {
  const message = "Oh no"

  const expected = {
        type: 'SHOW_ERROR',
        message: "Oh no"
  }

  const actual = showError(message)

  expect(actual).toEqual(expected)
})