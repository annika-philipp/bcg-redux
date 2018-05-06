import React from 'react'
import {connect} from 'react-redux'
// import Welcome from './Welcome'
import Display from './Display' 
// import GameOver from './GameOver'
// import AddScore from './AddScore'

// import {beforeGame} from '../actions/game'
// import { fetchQuestions, increaseIndex } from '../actions/questions';

// class App extends React.Component {
const App = props => {

//   componentDidMount() {
//     this.props.dispatch(fetchQuestions())

// }


  // render () {
  return (
    <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>  
              <Display />
    </div>
  )
}
// }

// function mapStateToProps(state) {
//   return {
//   questions: state.questions,
//   index: state.index
//   }
// }

// export default connect(mapStateToProps)(App)
export default App