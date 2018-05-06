import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestions, increaseIndex } from '../actions/questions';

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            index: this.props.index
        }
    }

  componentDidMount() {
    this.props.dispatch(fetchQuestions())

    }

    updateIndexAndScore() {
        this.props.dispatch(increaseIndex(this.props.index, this.props.questions))
        console.log(this.props.index)
    }




    render () {
        var question = this.props.questions[this.props.index]
        {question = question || ''}
        // what is happening in the above line, could this be done with componentwillReceiveProps and then a state for display?
    return (
      <div>
        <div className="score">
        {/* <h2 style={{color: scoreIncreased ? 'green' : 'red'}}>score: {totalscore}</h2> */}
        <h2>score</h2>
        </div>
        <div className="screen">
          <div className="question">
          <h1>{question.question}</h1>
          </div> 
        </div>
        <div>   
        {/* <button onClick={() => updateIndex(question.scores[0])} value='button1' className="button">{question.answers[0]}</button> */}
        <button onClick={this.updateIndexAndScore.bind(this)} value="button2" className="button">Answer 1</button>
        <button onClick={this.updateIndexAndScore.bind(this)} value="button2" className="button">Answer 2</button>
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