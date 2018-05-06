import React from 'react'

const Scoreboard = ({topScores}) => {
    return (
        <div>
            <div className="scoreboard">
                <h4>Top Scores</h4>
                <div className="topscores">
                {topScores.map(score => {
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

export default Scoreboard