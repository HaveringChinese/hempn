import React from "react";


function Menu(props){


  function handleClick(event){
    switch(event.target.name) {
      case "home":
        props.handlePageChange("initial");
        props.handleExit();
        break;
      case "shop":
        props.handlePageChange("shop");
        props.handleExit();
      break;
      case "grow":
        props.handlePageChange("grow");
        props.handleExit();
      break;
      case "login-register":
        props.handlePageChange("user");
        props.handleExit();
        break;
      case "about":
        props.handlePageChange("about");
        props.handleExit();
        break;
      default:
        // code block
    }
  }

  return (
    <div className="menu" onMouseLeave={props.handleExit}>
      <div className="menu-header">
        <p>Get Hempn!</p>
      </div>
      <button name="home" onClick={handleClick}>Home</button>
      <button name="shop" onClick={handleClick}>Shop</button>
      <button name="grow" onClick={handleClick}>Grow</button>
      <button name="login-register" onClick={handleClick}>Login / Register</button>
      <button name="about" onClick={handleClick}>About</button>
      
    </div>
  )
};


export default Menu;