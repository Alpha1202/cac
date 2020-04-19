import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io';
import { MdCancel,MdStop,FaStop } from "react-icons/all"
import "./style.css"
function BackDrop(props) {
    const style = {
        color: props.color ? "#442b71":"#e6e6e4",  
        size:"2.5rem"
    }
    const [backdrop, setBackdrop] = useState(false);
    const icon = backdrop ? <MdCancel {...style} /> : <IoMdMenu {...style} />
    const container = !backdrop && "dont-show" 
    return (
        <div style={{"display":"flex"}}>
            <div onClick={()=>setBackdrop(!backdrop)} className="hambuger">
                {icon}
            </div>   
            <div className={`${container} backdrop-container`}>
                {backdrop && props.children} 
            </div> 
        </div>       
    )
}

export default BackDrop
