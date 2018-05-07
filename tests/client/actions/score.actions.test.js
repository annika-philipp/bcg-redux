const {addToTotalscore, isPositiveScore, scoreIncreased} = require('../../../client/actions/score')

test('addToTotalScore adds to totalScore', () => {
  //Arrange
  const score = 10

  const expected = {
        type: 'ADD_TO_TOTALSCORE',
        scoreValue: score

  }

  //Act
  const actual = addToTotalscore(score)

  //Assert
  expect(actual).toEqual(expected)
})