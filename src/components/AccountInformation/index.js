import React from 'react';

function AccountInfomation(props) {
    return (
        <div className="information-wapper">
            <div className="infomation-container">
                <div className="information-cover">
                    <span className="info-info">{props.info[0][0]}</span> 
                    <span className="info-value">{props.info[0][1]}</span> 
                </div>
                
                <div className="information-cover">
                    <span className="info-info">{props.info[1][0]}</span> 
                    <span className="info-value">{props.info[1][1]}</span>
                </div>
            </div>
        </div>
    )
}

export default AccountInfomation;
