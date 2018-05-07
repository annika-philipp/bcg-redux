import score from '../../../client/reducers/score'

test('Score Reducer initial state', () => {
    const expected = {
        totalScore: 0,
        topScores: [],
        isPositiveScore: true,
        isTopScore: false,
        scoreIncreased: false
    }
    const action = {}
  
    const actual = score(undefined, action)
  
    expect(actual).toEqual(expected)
  })
  
  test('Adds new score value to totalscore', () => {
      const scoreValue = 10
      const expected = {
        totalScore: 10,
        topScores: [],
        isPositiveScore: true,
        isTopScore: false,
        scoreIncreased: false
    }
  
      const action = {
        type: 'ADD_TO_TOTALSCORE',
        scoreValue
      }
      console.log(scoreValue)

    
      const actual = score(undefined, action)
      console.log(actual)
    
      expect(actual).toEqual(expected)
    })
