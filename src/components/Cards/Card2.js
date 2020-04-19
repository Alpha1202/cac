import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import '@brainhubeu/react-carousel/lib/style.css';
import PropertyInfo from './PropertyInfo';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';
import "./style/style.css"
import "./style/responsive.css"

function Card2(props) {
  return (
    <div className="card2-container card-shadow">
        <div>
          <Carousel
            arrowLeft={<RiArrowDropLeftLine color={"white"} size={"2.4rem"}/>}
            arrowRight={<RiArrowDropRightLine color={"white"} size={"2.4rem"}/>}
            addArrowClickHandler={()=>{console.log("gg")}}
          >
            {[20,70,60,40,25].map((item,idx)=><PropertyInfo index={idx} percent={item} icon={props.icon} />)}
        </Carousel>
      </div>
    </div>
    )
}

export default Card2;

