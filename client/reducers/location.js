const location = (state = 'welcome', action) => {
  switch (action.type) {
    case 'NAVIGATE':
      return action.destination
    default:
      return state
  }
}

export default location
