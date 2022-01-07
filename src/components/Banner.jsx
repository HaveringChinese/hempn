import React from "react";

const date = new Date().getFullYear();

function Banner(props){

  return (
    <div className={props.className}>
      
      {props.button === "menu" && <button className="menu-button">三</button>}

      <p className = {props.textClassName}> {props.text}{props.date === "date" && "© " + date + " Hempn. All Rights Reserved"}</p>
            
    </div>
  )
}

export default Banner;
