import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";


function Menu(props){

  const [clickedRegister, setClickedRegister] = useState("unclicked");
  const [clickedLogin, setClickedLogin] = useState("unclicked");

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
        setClickedRegister("clicked");
        break;
      case "login":
        setClickedLogin("clicked")
        break;
      default:
        // code block
    }
  }

  return (
    <div>
      <div className="menu-header">
        <p>Get Hempn!</p>
      </div>
      <button name="home" onClick={handleClick}>Home</button>
      <button name="shop" onClick={handleClick}>Shop</button>
      <button name="grow" onClick={handleClick}>Grow</button>
      <button name="register" onClick={handleClick}>Register</button>
      <button name="login" onClick={handleClick}>Login</button>

      {clickedRegister === "clicked" && <Register />}
      {clickedLogin === "clicked" && <Login />}
      
    </div>
  )
};


export default Menu;