import React from 'react'
import {connect} from 'react-redux'
import Welcome from './Welcome'
import Display from './Display' 
import GameOver from './GameOver'
import AddScore from './AddScore'


export const App = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>BCG 3000</h1>
      </div>  
      {props.location === 'welcome' ? <Welcome /> : props.location === 'scoreboard' ? <AddScore /> : <Display />}      
    </div>
  )
}

function mapStateToProps(state) {
  return {
  location: state.location
  }
}

export default connect(mapStateToProps)(App)

//exporting App as const to allow for React unit testing
//exporting the whole component as default connect to test for React/Redux
