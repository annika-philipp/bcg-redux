import questions from '../../../client/reducers/questions'

test('Questions Reducer initial state', () => {
  const expected = []
  const action = {}

  const actual = questions(undefined, action)

  expect(actual).toEqual(expected)
})

test('RECEIVE_QUESTIONS', () => {
  const questionsarray = [{name: 'Harrison'}, {name: 'Kelly'}]
  const expected = [
    questionsarray
  ]

  const action = {
    type: 'RECEIVE_QUESTIONS',
    questionsarray
  }

  const actual = questions([], action)

  expect(actual).toEqual(questionsarray)
  expect(actual).toHaveLength(2)
  expect(actual[0].name === 'Kelly').toBeFalsy()

})

test('SHOW_ERROR brings up error message', () => {
  const expected = 'Oh no an error'

  const action = {
    type: 'SHOW_ERROR'
  }

  const actual = questions(undefined, action)

  expect(actual).toEqual(expected)
})
