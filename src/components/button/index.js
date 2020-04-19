import React, { Component } from 'react';
// import './style.css'

const Button = ({ children, styled,onClick}) => {
 return (
     <button onClick={onClick} className={styled ? 'btn-colored button' : 'btn button'}>
        {children}
     </button>
 )
}

export default Button;