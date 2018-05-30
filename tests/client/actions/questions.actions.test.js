import {
    receiveQuestions,
    increaseIndex,
    fetchQuestions,
    showError

} from '../../../client/actions/questions'

import nock from 'nock'


test('receiveQuestions works', () => {
  //Arrange
  const questionsarray = [
    {id: 1, question: "First day of bootcamp, you feel...", week: 1},
    {id: 2, question: "function getGreeting (name) {", week: 1}
  ]

  const expected = {
        type: 'RECEIVE_QUESTIONS',
        questionsarray
  }

  //Act
  const actual = receiveQuestions(questionsarray)
  //Assert
  expect(actual).toEqual(expected)  
  expect(actual.questionsarray.length).toBe(2)
 
})


test('fetchQuestions will dispatch RECEIVE_QUESTIONS action on success', () => {
  const fakeQuestions = [
      {id: 1, question: "First day of bootcamp, you feel...", week: 1},
      {id: 2, question: "function getGreeting (name) {", week: 1}
    ]

  const scope = nock('http://localhost:80')
    .get('/api/v1')
    .reply(200, fakeQuestions)

  const dispatch = jest.fn()

  return fetchQuestions()(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('RECEIVE_QUESTIONS')
      scope.done()
    })
})


test('fetchQuestions will dispatch SHOW_ERROR action if error', () => {
  const fakeQuestions = [
      {id: 1, question: "First day of bootcamp, you feel...", week: 1},
      {id: 2, question: "function getGreeting (name) {", week: 1}
    ]

  const scope = nock('http://localhost:80')
    .get('/api/v1')
    .reply(500, fakeQuestions)

  const dispatch = jest.fn()

  return fetchQuestions()(dispatch)
    .catch(() => {
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0][0].type).toBe('SHOW_ERROR')  
      scope.done()
    })
})

test('increaseIndex is totally correct', () => {
  const num = 1

  const expected = {
        type: 'INCREASE_INDEX',
        num: num
  }

  const actual = increaseIndex(num)

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