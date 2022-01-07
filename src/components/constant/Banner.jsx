import React, { useState } from "react";
import Menu from "./Menu";


const date = new Date().getFullYear();

function Banner(props){

  const [menuOpened, setMenuOpened]  = useState(false);


  function handleClick(){
    setMenuOpened(!menuOpened)
  }


  return (
    <div className={props.className}>
      
      {props.button === "menu" && <button className="menu-button" onClick={handleClick}>三</button>}
      
      {menuOpened === true && <Menu handlePageChange = {props.handlePageChange}/>}

      <p className = {props.textClassName}> {props.text}{props.date === "date" && "© " + date + " Hempn. All Rights Reserved"}</p>
            
    </div>
  )
}

export default Banner;
