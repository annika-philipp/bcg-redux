import React from 'react'
import { connect } from 'react-redux'
import {gamePlaying} from '../actions/game'



class Welcome extends React.Component {

    changeGameState() {
        this.props.dispatch(gamePlaying())
    }

    render() {
    return (<div>
                <div className="welcome">
                    <h3>Welcome to 6 weeks</h3>
                    <h3>of fun...</h3> 
                </div>  
                <div className='row'>  
                <button onClick={this.changeGameState.bind(this)} className="button">Start Game</button>
                </div>
            </div>    

    )



    }
}


export default connect()(Welcome)