import React, { Component } from 'react'
import "./style.css"
import Header from '../../components/Header'
import Main from './Main'

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header auth={true}/>
                <Main />
            </div>
        )
    }
}

export default SignUp;