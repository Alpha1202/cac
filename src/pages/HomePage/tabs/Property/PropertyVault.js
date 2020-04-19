import React, { useContext } from 'react';
import PropertyContext from "./SelectPropetyContext"
function PropertyVault() {
    const context = useContext(PropertyContext)
    return (
        <div onClick={context} className="property-listed-vaults">
            <div className="listed-property-vault-image-container">image</div>
            <div className="list-propery-vault-item-info">
                <span>3 plot</span>
                <span>VGC,Ajah</span>
            </div>
            <h3>2,000,000</h3>
        </div> 
    )
}

export default PropertyVault;
