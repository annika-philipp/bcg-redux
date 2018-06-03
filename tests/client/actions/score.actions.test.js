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


test('getScoresApi will dispatch RECEIVE_TOPSCORES_API action on success', () => {
  const fakeScores = [
    {name: 'Kelly', score: 100},
    {name: 'Ross', score: 90},
  ]

  const scope = nock('http://localhost:80')
    .get('/api/scores')
    .reply(200, fakeScores)

  const dispatch = jest.fn()

  return getScoresApi()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_TOPSCORES_API')
      scope.done()
    })
})

test('getScoresApi will dispatch SHOW_ERROR action if error', () => {
  const fakeScores = [
      {name: 'Kelly', score: 100},
      {name: 'Ross', score: 90},
    ]

  const scope = nock('http://localhost:80')
    .get('/api/scores')
    .reply(500, fakeScores)

  const dispatch = jest.fn()

  return getScoresApi()(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('SHOW_ERROR')  
      scope.done()
    })
})

////

test('addScoreApi will dispatch RECEIVE_TOPSCORES_API action on success', () => {
  const fakeScores = [
    {name: 'Kelly', score: 100},
    {name: 'Ross', score: 90},
  ]

  const scope = nock('http://localhost:80')
    .get('/api/scores')
    .reply(200, fakeScores)

  const dispatch = jest.fn()

  return getScoresApi()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_TOPSCORES_API')
      scope.done()
    })
})

test('addScoreApi will dispatch ADD_NEW_TOPSCORE action on success', () => {
  const topScore = 
    {name: 'Player 1', score: 170}
    
  const scope = nock('http://localhost:80')
    .post('/api/scores')
    .reply(200, topScore);

  const dispatch = jest.fn()

  return addScoreApi()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('ADD_NEW_TOPSCORE')
      scope.done()
    })
})

test('addScoreApi will dispatch SHOW_ERROR action on error', () => {
  const topScore = 
    {name: 'Player 1', score: 170}
    
  const scope = nock('http://localhost:80')
    .post('/api/scores')
    .reply(500, topScore);

  const dispatch = jest.fn()

  return addScoreApi()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[1][0].type).toBe('SHOW_ERROR')
      scope.done()
    })
})


test('receiveScoresFromAPI works', () => {

  const topScores = [170, 160]

  const expected = {
        type: 'RECEIVE_TOPSCORES_API',
        topScoresApi: topScores
  }

  const actual = receiveScoresFromAPI(topScores)

  expect(actual).toEqual(expected)
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