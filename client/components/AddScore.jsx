import React from 'react'
import {connect} from 'react-redux'
import {getScoresApi} from '../actions/score'
// import Scoreboard from './Scoreboard'

// import {addScoreApi} from '../api'

class AddScore extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         score: this.props.totalscore,
    //         isTopScore: this.props.isTopScore,
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    //     this.addScore = this.addScore.bind(this)
    // }

    // handleChange (e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }


    // addScore (e) {
    //     // console.log(this.state)
    //     e.preventDefault()
    //     addScoreApi(this.state, this.props.refreshScores)
    // }

    componentDidMount(){
        this.props.dispatch(getScoresApi())
        console.log("dispatching for scores")
    }
    render () {
        return (
        <div>
            <div className="welcome">
            <h3>Well done!</h3>
            <h3>Deploy yourself into phase 3</h3> 
            <p>Your totalscore is: {this.props.score.totalScore}</p>
            {/* {this.props.isTopScore && <div><form onSubmit={this.addScore}>
            <p>Add your name to the scoreboard</p>
            <input placeholder='Player' name='name' onChange={this.handleChange} value={this.state.name} />
            <input type='submit' value='Submit'/>
            </form>
            </div>
            }
            {!this.props.isTopScore && <div className='row'>  
            </div>}
            </div>
            <div className="row">
            {this.props.topScores.length > 0 && <Scoreboard topScores={this.props.topScores}/>}
            <div className="row">
                <button onClick={this.props.resetGame} className="button">Play again</button>
            </div>  */}
            </div>
           
    </div> )
    }
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}

export default connect(mapStateToProps)(AddScore)