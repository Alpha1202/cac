import React from 'react';
import "./style.css"
function newButton(props) {
    const type = props.type ? "button-1":"button-2";
    return (
            <button 
            className={type} 
            onClick={props.onClick}>{props.children}</button>
        )
}

export default newButton;
