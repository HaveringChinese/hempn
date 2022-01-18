import React, { useState } from "react";
import Menu from "./Menu";



function Banner(props){
  
  const date = new Date().getFullYear();
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
    <div className={props.className} onMouseLeave={props.className === "header-banner" && menuOpened ? handleExit: null}>
      
      {props.button === "menu" && <button className="menu-button" onMouseEnter={handleEnter} onClick={handleClick}>三</button>}
      
      {menuOpened === true && <Menu handlePageChange = {props.handlePageChange} handleUser = {props.handleUser} handleExit = {handleExit}/>}

      <p className = {props.textClassName}>{props.text}{props.date === "date" && "© " + date + " Hempn. All Rights Reserved"}</p>
            
    </div>
  )
}

export default Banner;
