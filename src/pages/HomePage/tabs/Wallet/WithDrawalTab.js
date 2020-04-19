import React from 'react'

function WithDrawalTab(props) {
    return (
        <div className="withdrawal-container">
            <div>
                <h2 className="withdrawla-ammount"></h2>
            </div>
            <span className="des-txt">Destination account</span>
            <div>
                {props.propertyICon("GTBank-Martinz llonze")}
                {props.propertyICon("Access Bank-Martinz llonze")}
                {props.propertyICon("Polaris-Martinz llonze")}
                {props.propertyICon("Others")}
            </div>
        </div>
    )
}

export default WithDrawalTab
