import React from 'react'
import { connect } from 'react-redux'
import {navigate} from '../actions/navigate'



class Welcome extends React.Component {

    changeLocation() {
        this.props.dispatch(navigate('display'))
    }

    render() {
        return (<div>
                    <div className="welcome">
                        <h3>6 weeks of EDA Bootcamp fun starts here ...</h3> 
                    </div>  
                    <div className='row'>  
                    <button onClick={this.changeLocation.bind(this)} className="button">Start Game</button>
                    </div>
                </div>    
        )
    }
}


export default connect()(Welcome)