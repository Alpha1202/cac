import React from 'react'
import MaturedCard from './MaturedCard'

function MaturedCards() {
    return (
        <div className="list-item-wrapper">
            <MaturedCard pay={true}/>
            <MaturedCard />
            <MaturedCard pay={true}/>
        </div>   
    )
}

export default MaturedCards
