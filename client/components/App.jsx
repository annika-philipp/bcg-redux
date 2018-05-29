import React from 'react'
import {connect} from 'react-redux'
import WelcomeContainer from '../containers/WelcomeContainer'
import Display from './Display' 
import GameOver from './GameOver'
import AddScore from './AddScore'


const App = props => {
  return (
    <div className="container">
      <div className="row">
        <h1>BCG 3000</h1>
      </div>  
      {props.location === 'welcome' ? <WelcomeContainer /> : props.location === 'scoreboard' ? <AddScore /> : <Display />}      
    </div>
  )
}

function mapStateToProps(state) {
  return {
  location: state.location
  }
}

export default connect(mapStateToProps)(App)
