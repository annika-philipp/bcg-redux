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
  
  test('ADD_TO_TOTALSCORE adds new score value to totalscore', () => {
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

    test('IS_POSITIVE_TOTALSCORE returns true if positive - EXPECT THIS TO FAIL IN TEST', () => {
        const totalScore = 0
        const expected = {
          totalScore: 0,
          topScores: [],
          isPositiveScore: true,
          isTopScore: false,
          scoreIncreased: false
      }
    
        const action = {
            type: 'IS_POSITIVE_TOTALSCORE'
        }
  
      
        const actual = score(undefined, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })

      test('IS_POSITIVE_TOTALSCORE returns false if negative totalscore - EXPECT THIS TO FAIL IN TEST', () => {
        // const totalScore =  -10
        const expected = {
          totalScore: -12,
          topScores: [],
          isPositiveScore: false,
          isTopScore: false,
          scoreIncreased: false
      }
    
        const action = {
            type: 'IS_POSITIVE_TOTALSCORE',
        }
  
      
        const actual = score(undefined, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })

      test('SCORE_INCREASED returns true if positive', () => {
        const scoreValue = 10
        const expected = {
          totalScore: 0,
          topScores: [],
          isPositiveScore: true,
          isTopScore: false,
          scoreIncreased: true
      }
    
        const action = {
            type: 'SCORE_INCREASED',
            scoreValue
        }
  
      
        const actual = score(undefined, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })

      test('SCORE_INCREASED returns false if negative scoreValue', () => {
        const scoreValue = -10
        const expected = {
          totalScore: 0,
          topScores: [],
          isPositiveScore: true,
          isTopScore: false,
          scoreIncreased: false
      }
    
        const action = {
            type: 'SCORE_INCREASED',
            scoreValue
        }
  
      
        const actual = score(undefined, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })
