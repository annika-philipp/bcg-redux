import React from 'react'
import {connect} from 'react-redux'
import {reset} from '../actions/score'
import {navigate} from '../actions/navigate'


function GameOver (props) {

    function playAgain() {
        props.dispatch(reset())
        props.dispatch(navigate('welcome'))
    }

    return (<div>
                <div className="gameOver">
                    <h3>GAME OVER</h3>
                    <h3>Consult your nearest handbook...</h3> 
                </div>
                <div className='row'>  
                    <button onClick={playAgain} className="button">Play again</button>
                </div>
            </div>
    )
}

export default connect()(GameOver)