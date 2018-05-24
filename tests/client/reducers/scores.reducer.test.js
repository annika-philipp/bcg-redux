import score from '../../../client/reducers/score'

test('Score Reducer initial state', () => {
    const expected = {
        totalScore: 0,
        topScores: [],
        isPositiveTotalScore: true,
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
        isPositiveTotalScore: true,
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

    test('IS_POSITIVE_TOTALSCORE returns true if positive - EXPECT THIS TO FAIL IN TEST, Fixed through componentWillReceiveProps', () => {
        const totalScore = 0
        const expected = {
          totalScore: 0,
          topScores: [],
          isPositiveTotalScore: true,
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

      test('IS_POSITIVE_TOTALSCORE returns false if negative totalscore - EXPECT THIS TO FAIL IN TEST, Fixed through componentWillReceiveProps', () => {
        // const totalScore =  -10
        const expected = {
          totalScore: -12,
          topScores: [],
          isPositiveTotalScore: false,
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
          isPositiveTotalScore: true,
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
          isPositiveTotalScore: true,
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

      test('IS_TOPSCORE returns true if score is 160', () => {
        const totalScore = 160

        const initialState = {
          totalScore: 0,
          topScores: [
            {id: 1, user_id: 1, score: 80, name: "Player1"},
            {id: 2, user_id: 2, score: 75, name: "Player1"},
            {id: 3, user_id: 3, score: 70, name: "Player1"},
            {id: 4, user_id: 4, score: 65, name: "Player1"},
            {id: 5, user_id: 5, score: 60, name: "Player1"},
            {id: 6, user_id: 6, score: 55, name: "Player1"},
            {id: 7, user_id: 7, score: 50, name: "Player1"},
            {id: 8, user_id: 8, score: 45, name: "Player1"},
            {id: 9, user_id: 9, score: 40, name: "Player1"},
            {id: 10, user_id: 10, score: 35, name: "Player1"}
          ],
          isPositiveTotalScore: false,
          isTopScore: false,
          scoreIncreased: false
      }

        const expected = {
          totalScore: 0,
          topScores: [
            {id: 1, user_id: 1, score: 80, name: "Player1"},
            {id: 2, user_id: 2, score: 75, name: "Player1"},
            {id: 3, user_id: 3, score: 70, name: "Player1"},
            {id: 4, user_id: 4, score: 65, name: "Player1"},
            {id: 5, user_id: 5, score: 60, name: "Player1"},
            {id: 6, user_id: 6, score: 55, name: "Player1"},
            {id: 7, user_id: 7, score: 50, name: "Player1"},
            {id: 8, user_id: 8, score: 45, name: "Player1"},
            {id: 9, user_id: 9, score: 40, name: "Player1"},
            {id: 10, user_id: 10, score: 35, name: "Player1"}
          ],
          isPositiveTotalScore: false,
          isTopScore: true,
          scoreIncreased: false
      }
    
        const action = {
            type: 'IS_TOPSCORE',
            totalScore
        }
  
      
        const actual = score(initialState, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })

      test('IS_TOPSCORE returns false if score is 30', () => {
        const totalScore = 30

        const initialState = {
          totalScore: 0,
          topScores: [
            {id: 1, user_id: 1, score: 80, name: "Player1"},
            {id: 2, user_id: 2, score: 75, name: "Player1"},
            {id: 3, user_id: 3, score: 70, name: "Player1"},
            {id: 4, user_id: 4, score: 65, name: "Player1"},
            {id: 5, user_id: 5, score: 60, name: "Player1"},
            {id: 6, user_id: 6, score: 55, name: "Player1"},
            {id: 7, user_id: 7, score: 50, name: "Player1"},
            {id: 8, user_id: 8, score: 45, name: "Player1"},
            {id: 9, user_id: 9, score: 40, name: "Player1"},
            {id: 10, user_id: 10, score: 35, name: "Player1"}
          ],
          isPositiveTotalScore: false,
          isTopScore: false,
          scoreIncreased: false
      }

        const expected = {
          totalScore: 0,
          topScores: [
            {id: 1, user_id: 1, score: 80, name: "Player1"},
            {id: 2, user_id: 2, score: 75, name: "Player1"},
            {id: 3, user_id: 3, score: 70, name: "Player1"},
            {id: 4, user_id: 4, score: 65, name: "Player1"},
            {id: 5, user_id: 5, score: 60, name: "Player1"},
            {id: 6, user_id: 6, score: 55, name: "Player1"},
            {id: 7, user_id: 7, score: 50, name: "Player1"},
            {id: 8, user_id: 8, score: 45, name: "Player1"},
            {id: 9, user_id: 9, score: 40, name: "Player1"},
            {id: 10, user_id: 10, score: 35, name: "Player1"}
          ],
          isPositiveTotalScore: false,
          isTopScore: false,
          scoreIncreased: false
      }
    
        const action = {
            type: 'IS_TOPSCORE',
            totalScore
        }
  
      
        const actual = score(initialState, action)
        console.log(actual)
      
        expect(actual).toEqual(expected)
      })


