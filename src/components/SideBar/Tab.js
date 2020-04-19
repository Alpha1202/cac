import React from 'react';

function Tab({tab,item,setTab}) {
    return (
        <div 
            onClick={()=>setTab(item[0])}
            className="side-bar-item">
            <img
                className="side-bar-icon" 
                src={tab == item[0] ? item[1]:item[2]} 
                alt={item[1]} 
            />
            <span className={`tab-text ${tab == item[0] ? "hovered-active-item" : "item"}`}>
                {item[0]}
            </span>
        </div> 
    )
}

export default Tab;
