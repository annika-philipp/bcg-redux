import {
    receiveQuestions,
    increaseIndex,
    fetchQuestions,
    showError

} from '../../../client/actions/questions'

import nock from 'nock'


//is the second test in receive Questions doing anything?

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

test('fetchQuestions will dispatch an action on success', () => {
    const fakeQuestions = [
        {id: 1, question: "First day of bootcamp, you feel...", week: 1},
        {id: 2, question: "function getGreeting (name) {", week: 1}
      ]
  
    const scope = nock('http://localhost:80')
      .get('/api/v1')
      .reply(200, fakeQuestions);
  
    const expectedAction = {
      type: 'RECEIVE_QUESTIONS',
      topScoresApi: fakeQuestions
    }
  
    const dispatch = jest.fn()
      .mockImplementationOnce(action => {
        expect(action).toEqual(expectedAction)
        scope.done()
      })
  
      fetchQuestions()(dispatch)
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