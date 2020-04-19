import React from 'react'
import "./style.css"
function TextIconVertical({icon,text}) {
    return (
        <div className="TextIconVertical">
          <div>{icon}</div>
          <div>{text}</div>
        </div>        
    )
}

export default TextIconVertical
