import React, { Component } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

class QuestionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropDown:false,
            state:true  
         }
    }

    render() {
        return (
            <div className="question-wrapper">
                <div className="question-title">
                    <h2>An example of a qestion title</h2>  
                    <div className = { `icons-wrapper d-d-i-${this.state.state ? "up":"down" }` }
                        onClick={()=>this.setState({
                            dropDown:!this.state.dropDown,
                            state:!this.state.state 
                        })}>
                        <RiArrowDropDownLine color={"#dedbdb"} size={"2.4rem"}/>
                    </div>
                </div>
                {this.state.dropDown && (<span> 
                    this is an example of an answear to a qestion
                    this is an example of an answear to a qestion
                    this is an example of an answear to a qestion
                    this is an example of an answear to a qestion
                    this is an example of an answear to a qestion 
                    </span>)}
            </div>
        )
    }
}

export default QuestionComponent
