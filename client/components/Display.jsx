import React from 'react'
import { connect } from 'react-redux'
import { addToTotalscore, scoreIncreased } from '../actions/score'
import { fetchQuestions, increaseIndex } from '../actions/questions'

class Display extends React.Component{


  componentDidMount() {
    this.props.dispatch(fetchQuestions())
  }

  updateIndex(scoreValue) {
    //can I put something in here like: if (this.props.index == this.props.length -1) dispatch(navigate or whatever I called it(gameOver))
    //  else 
      // this.props.dispatch(scoreIncreased(scoreValue))
      this.props.dispatch(increaseIndex(this.props.index));
      this.props.dispatch(addToTotalscore(scoreValue))
      this.props.dispatch(scoreIncreased(scoreValue))
  }


  render () {
    var question = this.props.questions[this.props.index]

    return (
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