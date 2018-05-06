const {increaseIndex} = require('../client/actions/questions')

test('increaseIndex is totally correct', () => {
  //Arrange
  const num = 1
  const array = []
  const expected = {
        type: 'INCREASE_INDEX',
        index: num,
        questions: array

  }

  //Act
  const actual = increaseIndex(1, array)

  //Assert
  expect(actual).toEqual(expected)
})