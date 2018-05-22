const index = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_INDEX':
            return action.num +1
        case 'RESET':
            return 0
        default:
            return state
    }
}

export default index

