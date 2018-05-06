import questions from '../client/reducers/questions'

test('Questions Reducer initial state', () => {
  const expected = []
  const action = {}

  const actual = questions(undefined, action)

  expect(actual).toEqual(expected)
})

  
  test('RECEIVE_QUESTIONS', () => {
    const questionsobject = [{name: "Harrison"}, {name: "Kelly"}]
    const expected = [
        questionsobject
    ]
    

    const action = {
        type: 'RECEIVE_QUESTIONS',
        questionsobject
    }

    const actual = questions([], action)

    expect(actual).toEqual(questionsobject)
    expect(actual).toHaveLength(2)
    expect(actual[0].name == "Kelly").toBeFalsy()

  })

