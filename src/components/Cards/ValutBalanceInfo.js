import React from 'react'
import TextAndIcon from './TextAndIcon';

function ValutBalanceInfo(props) {
    return (
        <div className="ValutBalanceInfo-container">
            <div>
                <TextAndIcon text={"Valut Balance"} icon={props.icon}/>
            </div>
            <div className="ammount-container"> 
                <div className="ammount-wrapper">
                    <div>
                        <div>Ammount</div> 
                        <div className="money">5,000,000</div> 
                    </div>            
                    <div>
                        <div>Ammount</div> 
                        <div className="money">5,000,000</div> 
                    </div>                
                </div>
            </div>
            <div className="prgress-bar">
                <div className="prgress"></div>
            </div>
    </div>
    )
}

export default ValutBalanceInfo
