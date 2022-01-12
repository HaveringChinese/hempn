import React, { useState } from "react";
import Menu from "./Menu";


const date = new Date().getFullYear();

function Banner(props){

  const [menuOpened, setMenuOpened]  = useState(false);


  function handleEnter(){
    setMenuOpened(!menuOpened)
  }

  function handleClick(){
    setMenuOpened(!menuOpened)
  }

  function handleExit(){
    setMenuOpened(!menuOpened)
  }

  return (
    <div className={props.className}>
      
      {props.button === "menu" && <button className="menu-button" onMouseEnter={handleEnter} onClick={handleClick}>三</button>}
      
      {menuOpened === true && <Menu handlePageChange = {props.handlePageChange} handleExit = {handleExit}/>}

      <p className = {props.textClassName}>{props.text}{props.date === "date" && "© " + date + " Hempn. All Rights Reserved"}</p>
            
    </div>
  )
}

export default Banner;
