import React from "react";


function Menu(props){


  function handleClick(event){
    switch(event.target.name) {
      case "home":
        props.handlePageChange("initial");
        break;
      case "shop":
        props.handlePageChange("shop");
      break;
      case "grow":
        props.handlePageChange("grow");
      break;
      case "register":
        props.handlePageChange("register");
        break;
      case "login":
        props.handlePageChange("login");
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
      <button name="register" onClick={handleClick}>Register</button>
      <button name="login" onClick={handleClick}>Login</button>
      
    </div>
  )
};


export default Menu;