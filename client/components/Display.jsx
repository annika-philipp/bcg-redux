import React from 'react'
import { connect } from 'react-redux'
import { addToTotalscore, scoreIncreased, isPositiveTotalscore } from '../actions/score'
import { fetchQuestions, increaseIndex } from '../actions/questions'
import {navigate} from '../actions/navigate'
import GameOver from './GameOver'


class Display extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gamePlaying: true
    }
  }

  componentWillReceiveProps(nextProps) {
    var totalScoreCheck = nextProps.score.isPositiveTotalScore
    this.setState ({
        gamePlaying: totalScoreCheck
    })
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestions())
  }

  updateIndex(scoreValue) {
    if (this.props.index == this.props.questions.length -1) this.props.dispatch(navigate('gameover'))
      else {
            this.props.dispatch(scoreIncreased(scoreValue))
            this.props.dispatch(increaseIndex(this.props.index))
            this.props.dispatch(addToTotalscore(scoreValue))
            this.props.dispatch(isPositiveTotalscore())
          }
  }


  render () {
    var question = this.props.questions[this.props.index]

    return (
      <div>
        {this.state.gamePlaying 
        ?
        <div>
        <div className="score">
        <h2 style={{color: this.props.score.scoreIncreased ? 'green' : 'red'}}>score: {this.props.questions.length > 0 && this.props.score.totalScore}</h2>
        </div>
        <div className="screen">
          <div className="question">
          <h3>{this.props.questions.length > 0 && question.question}</h3>
          </div> 
        </div>
        <div>   
        <button onClick = {() => this.updateIndex(question.scores[0])} value="button1" className="button">{this.props.questions.length > 0 && question.answers[0]}</button>
        <button onClick = {() => this.updateIndex(question.scores[1])} value="button2" className="button">{this.props.questions.length > 0 && question.answers[1]}</button>
        </div>
        </div>
        : <GameOver />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
    questions: state.questions,
    index: state.index,
    score: state.score
    }
}


export default connect(mapStateToProps)(Display)