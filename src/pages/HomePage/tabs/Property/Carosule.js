import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function Carosule(props){
    return (
        <Carousel
            addArrowClickHandler={()=>{console.log("hello")}}
        >
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
        </Carousel>
    )
}

export default Carosule;

// <Carousel
//     arrowLeft={<Icon name="angle-double-left" />}
//     arrowLeftDisabled={<Icon name="angle-left" />}
//     arrowRight={<Icon name="angle-double-right" />}
//     arrowRightDisabled={<Icon name="angle-right" />}
//     addArrowClickHandler
// >
//   <img src={imageOne} />
//   <img src={imageTwo} />
//   <img src={imageThree} />
// </Carousel>