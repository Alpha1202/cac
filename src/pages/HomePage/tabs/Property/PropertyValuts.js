import React from 'react'
import PropertyVault from './PropertyVault'
import Header from './Header'

function PropertyValuts() {
    return (
        <div className="property-vaults-container">
            <Header selected={true} />
            <div className="property-vaults-wrapper">
                {Array.from(Array(10).keys()).map((item,idx)=><PropertyVault />)}
            </div>
        </div>       
    )
}

export default PropertyValuts
