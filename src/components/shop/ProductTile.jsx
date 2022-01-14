import React from "react";

function ProductTile(props){

  return (
    <div className="card">
      <img id={props.id} src={props.source} alt={props.alternative}></img>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.carbon}</p>
      <button onClick={() => {props.addPurchases(props.carbon)}}>Purchase</button>
   
    </div>
  )
}

export default ProductTile;