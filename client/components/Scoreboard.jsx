import React from 'react'
import {connect} from 'react-redux'
import { getScoresApi } from '../actions/score'

export const Scoreboard = (props) => {

    function componentDidMount(){
        props.dispatch(getScoresApi())
    }
    
        return (
            <div>
                <div className="scoreboard">
                    <h4>Top Scores</h4>
                    <div className="topscores">
                    {props.score.topScores.map(score => {
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

function mapStateToProps(state){
    return {
        score: state.score
    }
} 

export default connect(mapStateToProps)(Scoreboard)

//exporting Scoreboard as const to allow for React unit testing
//exporting the whole component as default connect to test for React/Redux