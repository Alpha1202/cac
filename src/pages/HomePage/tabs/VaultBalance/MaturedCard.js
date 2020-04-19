import React from 'react'

function MaturedCard(props) {
    return (
        <div className="matured-card">
            <div className="matured-card-left">
                <div>
                    <h3>N 5,543,000</h3>
                    <span>N 5,543,000</span>
                </div>
                <span>+16%</span>
                <span>vault2</span>
                <div className="matured-card-left-info-wrapper">
                    <div>Matured</div>
                    <span>12 december 2022</span>
                    <span>05:45pm</span>
                </div>
            </div>
            {props.pay ? (<div>pay</div>) : <div style={{"width":"25px"}}></div>}
        </div>   
    )
}

export default MaturedCard
