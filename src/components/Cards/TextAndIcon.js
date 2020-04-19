import React from 'react';

function TextAndIcon(props) {
    return (
        <div style={{"display":"flex","alignItems":"center"}}>
            <div style={{"marginLeft":"5px"}}>{props.text}</div>
            <div>{props.icon}</div>
        </div>
    )
}

export default TextAndIcon;
