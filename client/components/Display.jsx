import React from 'react'
import { connect } from 'react-redux'
import { addToTotalscore } from '../actions/score'
import { fetchQuestions, increaseIndex } from '../actions/questions'

class Display extends React.Component{


  componentDidMount() {
    this.props.dispatch(fetchQuestions())
  }

  updateIndex(scoreValue) {
      this.props.dispatch(increaseIndex(this.props.index))
      this.props.dispatch(addToTotalscore(scoreValue))
  }


  render () {
    var question = this.props.questions[this.props.index]

    return (
      <div>
        <div className="score">
        {/* <h2 style={{color: scoreIncreased ? 'green' : 'red'}}>score: {totalscore}</h2> */}
        <h2>{this.props.questions.length > 0 && this.props.score.totalScore}</h2>
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