const index = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_INDEX':
            return increaseIndex(action.num, action.questions)
        default:
            return state
    }
}

export default index

function increaseIndex(num, array) {
    var next = num == array.length ? 0 : num + 1 
    return next
}
