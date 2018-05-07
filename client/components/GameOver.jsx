
import React from 'react'


const GameOver = ({resetGame}) => {
    return (<div>
                <div className="welcome">
                    <h3>GAME OVER</h3>
                    <h3>Consult your nearest handbook...</h3> 
                </div>
                {/* <div className='row'>  
                    <button onClick={resetGame} className="button">Play again</button>
                </div> */}
            </div>
    )
}

export default GameOver