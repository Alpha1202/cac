import React from 'react';
import TextAndIcon from './TextAndIcon';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";



function valutPercent(percent,color,status){
  return (
    <div className="valut-percent">
      <div style={{"background":color}}></div>
      <h1 className="money">{percent}</h1>
      <span>{status}</span>
    </div>
  );
}
function PropertyInfo(props) {
    return (
        <div className="property-info-slider">
            <TextAndIcon text={"Property Valut"} icon={props.icon}/>
            <div className="plots-location">
                <span>3 plot</span>
                <span>@ Shevron</span>
            </div>
            <div className="stats-container">
                <div className="stats-wrapper">
                    {valutPercent(`${props.percent}%`,"#432d78","completed")} 
                    <div className="visualizer-wrapper">
                        <CircularProgressbar 
                            value={props.percent}
                            style={buildStyles({
                                pathColor:"red",
                                trailColor:"orange",
                                backgroundColor:"yellow"
                            })} 
                        />
                    </div>
                    {valutPercent(`${100 - props.percent}%`,"#00ff8d","remaining")}
                </div>
            </div>
        </div>
    )
}

export default PropertyInfo;
