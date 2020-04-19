import React from 'react';
import "./style.css"
function Botton(props) {
    return (
        <button onClick={props.onClick} className="button">{props.children}</button>
    )
}

export default Botton;
