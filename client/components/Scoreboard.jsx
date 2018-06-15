import React from 'react'
import {connect} from 'react-redux'
import {getScoresApi} from '../actions/score'

export class Scoreboard extends React.Component {
  
  componentDidMount () {
    this.props.dispatch(getScoresApi())
  }

  render() {
    const firstFiveTopScores = this.props.score.topScores.slice(0, 5).map(score => <div className='topscoresnamesleft'>
    <p> {score.score} - {score.name} </p></div>)
    const secondFiveTopScores = this.props.score.topScores.slice(5).map(score => <div className='topscoresnamesright'><p> {score.score} - {score.name} </p></div>)
    return (
      <div>
        <div className='scoreboard'>
          <h4>Top Scores</h4>
          <div className='topscores'>
            <div className='topscoresleft'>
              {firstFiveTopScores}
            </div>
            <div className='topscoresright'>
              {secondFiveTopScores}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps)(Scoreboard)

// exporting Scoreboard as const to allow for React unit testing
// exporting the whole component as default connect to test for React/Redux
