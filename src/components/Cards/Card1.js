import React from 'react';
import "./style/style.css"
import "./style/responsive.css"
import TextAndIcon from './TextAndIcon';
function Card1(props) {
    return (
        <div className="card-wrapper card-shadow">
            <TextAndIcon text={props.text} icon={props.icon}/>
            <h1 className="wallet-balance money">N20,000,000.00</h1>
            <div className="loan-wrapper">
                {props.loan && (
                    <div className="loan-txt-icon">
                        <div>Loan</div>    
                        <div>L</div>    
                    </div>
                )}
                <div className="money-small">N20,000,000.00</div>
            </div>
        </div>
    )
}

export default Card1;
