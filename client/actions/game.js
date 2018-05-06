// beforeGame: true,
// gamePlaying: false,
// gameOver: false,


export function beforeGame () {
    return {
        type: 'BEFORE_GAME'
    }
}

export function gamePlaying () {
    return {
        type: 'GAME_PLAYING',
        
    }
}

export function gameOver () {
    return {
        type: 'GAME_OVER'
    }
}