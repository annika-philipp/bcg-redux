import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, increaseIndex } from '../actions/questions';

class Display extends React.Component{

//   componentWillReceiveProps(nextProps) {
//     //get questions and answers
//     if (this.props.questions[this.props.index] !== this.props.questions[nextProps.index]) {
//       console.log("WHAT?")
//   }
// }

  componentDidMount() {
    this.props.dispatch(fetchQuestions())
    }

    updateIndex() {
        this.props.dispatch(increaseIndex(this.props.index))
    }


    render () {
        var question = this.props.questions[this.props.index]
        {question = question || ''}
        var answers = question.answers
        {answers = answers || ''}
        // what is happening in the above line, could this be done with componentwillReceiveProps and then a state for display?
    return (
      <div>
        <div className="score">
        {/* <h2 style={{color: scoreIncreased ? 'green' : 'red'}}>score: {totalscore}</h2> */}
        <h2>score</h2>
        </div>
        <div className="screen">
          <div className="question">
          <h3>{question.question}</h3>
          </div> 
        </div>
        <div>   
        {/* <button onClick={() => updateIndex(question.scores[0])} value='button1' className="button">{question.answers[0]}</button> */}
        <button onClick = {this.updateIndex.bind(this)} value="button1" className="button">{answers[0]}</button>
        <button onClick = {this.updateIndex.bind(this)} value="button2" className="button">{answers[1]}</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
    questions: state.questions,
    index: state.index
    }
}


export default connect(mapStateToProps)(Display)