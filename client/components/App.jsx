import React from 'react'
import {connect} from 'react-redux'
import Welcome from './Welcome'
import Display from './Display' 
// import Display from './DisplayZ'


const App = props => {

  return (
    <div className="container">
            <div className="row">
                <h1>BCG 3000</h1>
            </div>  
            {props.location === 'welcome' ? <Welcome /> : <Display />}
    </div>
  )
}


function mapStateToProps(state) {
  return {
  location: state.location
  }
}

export default connect(mapStateToProps)(App)
