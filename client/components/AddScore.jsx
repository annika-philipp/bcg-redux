import React from 'react'
import {connect} from 'react-redux'
import { addScoreApi, reset } from '../actions/score'
import {navigate} from '../actions/navigate'
import Scoreboard from './Scoreboard'

export class AddScore extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      score: props.score.totalScore
    }
    this.handleChange = this.handleChange.bind(this)
    this.addScore = this.addScore.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addScore (e) {
    e.preventDefault()
    this.props.dispatch(addScoreApi(this.state))
  }

  playAgain () {
    this.props.dispatch(reset())
    this.props.dispatch(navigate('welcome'))
  }

  render () {
    return (
      <div>
        <div className='addScore'>
          <h3>Well done!</h3>
          <h3>Deploy yourself into phase 3</h3>
          <p>Your totalscore is: {this.props.score.totalScore}</p>
          
          <div>

            {this.props.score.isTopScore && <div><form onSubmit={this.addScore}>
              <p>Add your name to the scoreboard</p>
              <input placeholder='Player' name='name' onChange={this.handleChange} value={this.state.name} />
              <input type='submit' className='submit' value='Submit' />
              </form>
            </div>}
          </div>
        
        </div>  
          
        <div>  
          <div>
          {this.props.score.topScores.length > 0 && <Scoreboard topScores={this.props.topScores}/>}
          <div className='row'>
            <button onClick={this.playAgain.bind(this)} className='button'>Play again</button>
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

export default connect(mapStateToProps)(AddScore)
