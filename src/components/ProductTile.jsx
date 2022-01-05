import React, {useState} from "react";

function ProductTile(props){
  
  var [cart, purchases] = useState(0);

  function updateCart(){
    purchases(cart + 1)
  }

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button onClick={updateCart}>Purchase</button>
   
    </div>
  )
}

export default ProductTile;