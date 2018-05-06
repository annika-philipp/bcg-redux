
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Welcome = ({startGame}) => {
    return (<div>
                <div className="welcome">
                    <h3>Welcome to 6 weeks</h3>
                    <h3>of fun...</h3> 
                </div>  
                <div className='row'>  
                <button onClick={startGame} className="button">Start Game</button>
                </div>
            </div>    

    )



}

export default Welcome