import React from 'react';

function Feature(props) {
    return (
        <div className="feature">
            <div className='img-wrapper'>
                <img 
                    className="feature-image" 
                    src={props.img} 
                    alt={props.alt}/>
            </div>
            <h3>{props.header}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Feature;
