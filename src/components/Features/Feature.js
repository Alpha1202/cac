import React from 'react'

function Feature(props) {
  return (
    <div className="feature">
      <div className="img-wrapper">
          <div className="fg-1">
          <div className={props.resize ? "rs featured-container " : "rss featured-container "}>
          <img className={props.resizeImg ? "feature-image ft-img" : props.makeResize ? "feature-image mk-rz"  : "feature-image"}src={props.img} alt={props.alt} />
        </div>
          </div>
  
        <div className="feature-text">
            <div className="ft-text-wrapper">
          <h3>{props.header}</h3>
          <p>{props.paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature
