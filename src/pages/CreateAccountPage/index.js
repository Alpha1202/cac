import React, { PureComponent } from 'react'
import Header from '../../components/Header'
import "./style.css"
import Main from './Main'
class CreateAccountPage extends PureComponent {
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

export default CreateAccountPage