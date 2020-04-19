import React from 'react';
import "./style/style.css";
import "./style/responsive.css";
import Feature from './Feature';
import { features } from "./features"

function Features() {
    return (
        <div>
            <div className="features">
                <div className="features-container">
                    <div className="features-header">
                        <h2>Drive financial independence....create more property owners!</h2>
                        <p>
                            Cache is a property-specific savings platform that enable
                            a fast growing generation to take control of the long-term 
                            wealth by saving little-by-little to acquire a property.
                        </p>
                    </div>
                    <div className="features-wrapper">
                        {features.map((itm,idx)=><Feature 
                                img={itm.image} 
                                alt={itm.alt} 
                                header={itm.header} 
                                paragraph={itm.paragraph}
                                idx={idx} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;