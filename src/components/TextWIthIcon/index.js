import React from 'react';

function TextWIthIcon(props) {
    const style = {
        container:{"display":"flex","justifyContent":"center","alignItems":"center"},
        text:{
            "marginRight":"5px",
            "fontSize":"20px",
            "color":props.color,
            ...(props.bold && {"fontWeight": "900"})
        }
    }
        
    return (
        <div style={style.container}>
            <span style={style.text}>{props.text}</span>
            {props.icon}
        </div>
    )
}

export default TextWIthIcon;
