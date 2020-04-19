import React from 'react'
import "./style.css"
function Input(props) {
    return (
        <div className="input-wapper">
            <label>{props.text}</label>
            <input className={`input ${props.small && "small-input"}`} type="text" /> 
        </div>
    )
}

export default Input
