import React from 'react'
import { connect } from 'react-redux'
import {navigate} from '../actions/navigate'



// class Welcome extends React.Component {
export const Welcome = (props) => {


    // render() {
        return (<div>
                    <div className="welcome">
                        <h3>6 weeks of EDA Bootcamp fun starts here ...</h3> 
                    </div>  
                    <div className='row'>  
                    <button onClick={() => props.dispatch(navigate('display'))} className="button">Start Game</button>

                    </div>
                </div>    
        )
    // }
}

// export default Welcome

export default connect()(Welcome)