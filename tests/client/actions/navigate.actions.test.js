import { navigate } from '../../../client/actions/navigate'

test('navigate works', () => {
    const location = 'welcome'
  
    const expected = {
        type: 'NAVIGATE',
        destination: location
    }
  
    const actual = navigate(location)
  
    expect(actual).toEqual(expected)
  })