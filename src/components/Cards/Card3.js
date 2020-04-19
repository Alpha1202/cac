import React from 'react';
import ValutBalanceInfo from './ValutBalanceInfo';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import "./style/style.css"
import "./style/responsive.css"

function Card3(props) {
    return (
        <div className="card-3-container card-shadow">
            <div>
                <Carousel
                    arrowLeft={<RiArrowDropLeftLine color={"white"} size={"2.4rem"}/>}
                    arrowRight={<RiArrowDropRightLine color={"white"} size={"2.4rem"}/>}
                    addArrowClickHandler={()=>{console.log("gg")}}
                >
                    <ValutBalanceInfo props={props.icon}/>
                    <ValutBalanceInfo props={props.icon}/>
                    <ValutBalanceInfo props={props.icon}/>
                    <ValutBalanceInfo props={props.icon}/>
                </Carousel>
            </div>
        </div>
    )
}

export default Card3;
