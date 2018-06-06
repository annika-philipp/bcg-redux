import React from 'react'
import { connect } from 'react-redux'
import {navigate} from '../actions/navigate'

export const Welcome = (props) => {
// changed this from class to export const so I can test this both React specifically as well as connected with Redux

  return (
    <div>
      <div className='welcome'>
        <h3>6 weeks of EDA Bootcamp fun starts here ...</h3>
      </div>
      <div className='row'>
        <button onClick={() => props.dispatch(navigate('display'))} className='button'>Start Game</button>
      </div>
    </div>
  )
}

export default connect()(Welcome)
// this second export allows me to test this component as react/redux connect
