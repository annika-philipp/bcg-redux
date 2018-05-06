const questions = (state = 0, action) => {
    switch(action.type) {
        case 'INCREASE_INDEX':
            return increaseIndex(action.index, action.questions)
        default:
            return state
    }
}

export default questions

function increaseIndex(index, array) {
    console.log("array, ", array)
    var next = index == array.length -1 == index + 1 
    return next
}
