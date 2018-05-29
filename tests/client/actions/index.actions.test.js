const {increaseIndex} = require('../../../client/actions/questions')

test('increaseIndex is totally correct', () => {
  //Arrange
  const num = 1

  const expected = {
        type: 'INCREASE_INDEX',
        num: num

  }

  //Act
  const actual = increaseIndex(num)

  //Assert
  expect(actual).toEqual(expected)
})