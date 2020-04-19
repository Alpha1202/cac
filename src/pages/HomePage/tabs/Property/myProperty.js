import React from 'react';
import { FaLock } from "react-icons/fa"

function MyProperty({idx,locked,saving,sellLess}) {
    let move = (((idx+1) * (0 - 25)) + 20);
    if(idx == 0) move = 0;
    const property = {"--move":`${move}px`}
    return (
        <div className="property" style={property}>
        <div className="propety-left-item-wapper">
            {locked ? <FaLock color={"red"} size={"20px"} /> : <div style={{"width":"20px"}}></div>}
            <div className="image-container"></div>
        </div>
        <div className="propety-right-item-wapper">
            <div className={`${saving && "currently-saving"} property-info`}>
                {saving && <h3 className="currently-saving-txt">Currently saving</h3>}
                <div>
                    {!saving && <h3 className="property-price">2,000,000</h3> }
                    <div className="small-text">VGC,Ajah</div> 
                    {!saving && <div className="small-text">With 3 other</div>} 
                </div>
            </div>
            <div className={`
                        ${ (saving && sellLess) ? "not-saving" : ""} propety-right-right 
                        ${!sellLess && !saving && "percent-condition"}`}>
                {!saving && <span>+2.34</span>}
                {
                    !saving ? <div className="small-text">{(sellLess &&  "sell lease")}</div>:
                    <div className="saving-h4-wapper">
                        <h5>40%</h5>
                        <div>saving</div>
                    </div>
                }
            </div>
        </div>
    </div>
        );
}

export default MyProperty;
