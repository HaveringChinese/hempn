import React from "react";
import Register from "./Register";

function Header() {

  return(
    <div>
      <button className="menu-button">三</button>
      <button className="account-button"><img alt="profile" className="profile-image" src="../static/images/user.png"></img></button>
      <Cart />
      <Register />
    </div>
  )
}

function Cart(props) {
  return (
    <div className="cart">
      <h1>{props.purchases}</h1>

    </div>
  );
}

export default Header;
export {Cart};