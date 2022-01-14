import React, {useEffect, useState} from "react";

function ProductTile(props){
  
  var [purchases, updatePurchases] = useState(0);

  function purchase(){
    updatePurchases(purchases + 1)
  };
  
  useEffect(() => {props.addPurchases(purchases)}, )

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <button onClick={purchase}>Purchase</button>
   
    </div>
  )
}

export default ProductTile;