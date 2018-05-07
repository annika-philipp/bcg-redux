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
  
//   test('Increase index case', () => {
//       const num = 2
//       const expected = 3
  
//       const action = {
//         type: 'INCREASE_INDEX',
//         num
//       }
    
//       const actual = index(0, action)
//       console.log(actual)
    
//       expect(actual).toEqual(expected)
//     })
