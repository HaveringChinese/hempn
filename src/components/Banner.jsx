import React from "react";

function Banner(props){

  return (
    <div className={props.className}>
      
      <p className = {props.textClassName}>{props.text}{props.date}</p>
      
    </div>
  )
}

export default Banner;
