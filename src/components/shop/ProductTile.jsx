import React from "react";

function ProductTile(props){

  return (
    <div className="product-tile">
      <img id={props.id} src={props.source} alt={props.alternative}></img>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>Price: {props.price}</p>
      <p>Carbon sequestered per item: {props.carbon} pounds.</p>
      <button onClick={() => {props.addPurchases(props.carbon)}}>Purchase</button>
   
    </div>
  )
}

export default ProductTile;