import React from "react";

function Cart(props) {
  return (
    <div className="cart">
      <h1>{props.purchases}</h1>

    </div>
  );
}

export default Cart;