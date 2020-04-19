import React, { Component } from 'react'
import "./style/style.css"
import "./style/responsive.css"
import Question from './QuestionComponent'
import Header from '../../components/Header'
import Tag from './TagComponent'
import SearchBar from './SearchBarComponent'
export default class FaqPage extends Component {
    
    render() {
        return (
            <div className="faq-wrapper">
                <Header />
                <SearchBar />
                <div className="buttom">
                    <div className="faq-left">
                        <div className="button-wapper">
                            <Tag text="hello" />
                            <Tag text="hello" />
                            <Tag text="hello" />
                            <Tag text="hello" />
                            <Tag text="hello" />
                        </div>
                    </div>

                    <div className="faq-right">  
                        <Question />              
                        <Question />              
                        <Question />     
                        <Question />              
                        <Question />              
                        <Question />
                    </div>
                </div>
          </div>
        )
    }
}

