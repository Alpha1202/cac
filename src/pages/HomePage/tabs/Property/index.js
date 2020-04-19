import "./style.css";
import PropertyVault from './PropertyVault';
import myProperty from './myProperty';
import Header from './Header';
import PropetyContext from "./SelectPropetyContext";
import React, { Component } from 'react'
import PropertyValuts from "./PropertyValuts";
import SeletedProperty from "./SeletedProperty";
import MyProperty from "./myProperty";
class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedProperty:false
        }
    }
    render() {
        return (
            <div className="property-container">
                <div className="property-left-wrapper cover">
                    {
                        this.state.selectedProperty ? <SeletedProperty /> : 
                        <PropetyContext.Provider value={()=>{this.setState({selectedProperty:true})}}>
                            <PropertyValuts/>
                        </PropetyContext.Provider>
                    }
                </div>
                <div className="property-right-wrapper cover">
                    <h3>My Properties: 6</h3>
                    <div className="property-selection">
                        {["all","savings","acquired"].map((item,idx)=> <button onClick={()=>{this.setState({propertyTabSWith:item})}} className={`${this.state.propertyTabSWith == item ? "selected-property-tab" : "unselected-property-tab"}`}>{item}</button>)}
                    </div>
                    <div className="property-wrapper">
                        {
                            [1,2,3,4,5,6].map((item,idx)=>{
                                const randomNumber = (Math.round(Math.random() * 10) % 2) == 0;
                                const randomNumber2 = (Math.round(Math.random() * 10) % 2) == 0;
                                const randomNumber3 = (Math.round(Math.random() * 10) % 2) == 0;
                                return <MyProperty key={idx} idx={idx} locked={randomNumber} saving={randomNumber3} sellLess={randomNumber3} />
                            })
                        }
                        </div>    
                    </div>
            </div>
            )
        }
    }
export default index
 
                        // <MyProperty locked={true} saving={false} sellLess={true} />
                        // <MyProperty locked={true} saving={true} sellLess={true} />
                        // <MyProperty locked={false} saving={false} sellLess={false} />
                        // <MyProperty locked={true} saving={false} sellLess={true} />
                        // <MyProperty locked={true} saving={true} sellLess={true} />
                        // <MyProperty locked={true} saving={false} sellLess={false} />