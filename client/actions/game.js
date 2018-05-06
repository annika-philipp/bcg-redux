// beforeGame: true,
// gamePlaying: false,
// gameOver: false,

export const BEFORE_GAME = 'BEFORE_GAME'
export const GAME_PLAYING = 'GAME_PLAYING'
export const GAME_OVER = 'GAME_OVER'

export function beforeGame () {
    return {
        type: BEFORE_GAME
    }
}

export function gamePlaying () {
    return {
        type: GAME_PLAYING
    }
}

export function gameOver () {
    return {
        type: GAME_OVER
    }
}