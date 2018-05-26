import React from 'react'
import {connect} from 'react-redux'
import { getScoresApi } from '../actions/score'


class Scoreboard extends React.Component {
    
    componentDidMount(){
        this.props.dispatch(getScoresApi())
    }

    render(){

        return (
            <div>
                <div className="scoreboard">
                    <h4>Top Scores</h4>
                    <div className="topscores">
                    {this.props.score.topScores.map(score => {
                    return [
                        <div className="topscoresnames">
                    <p> {score.score} - {score.name} </p>
                    </div>
                    ]
                    })}
                    </div>
                </div>
            </div>    
        )
    }
}

function mapStateToProps(state){
    return {
        score: state.score
    }
} 

export default connect(mapStateToProps)(Scoreboard)