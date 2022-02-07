import React, { useState } from "react";
import ProductTile from "./ProductTile";
import Products from "./Products";
import SingleHemp from "../images/single-hemp.jpg";

function Shop() {
  const [input, setInput] = useState("");
  const [strategies, setStrategies] = useState([
    "And on top of these sustainable purchases, you also:",
  ]);
  const [cart, updateCart] = useState(0);
  const [sequestered, updateSequestered] = useState(0);

  function handleStrategies(event) {
    const newInput = event.target.value;
    setInput(newInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStrategies((prevStrat) => {
      return [...prevStrat, input];
    });
    setInput("");
  }

  function addPurchases(carbon) {
    updateCart(cart + 1);
    updateSequestered(sequestered + carbon);
  }

  function wiggle(){

    
  }

  return (
    <div className="shop">
      <div className="shop-header">
        {/* <img src={SingleHemp} className="shop-header-image" alt="single hemp plant"></img> */}
        <div className="shop-header-text"></div>
      </div>

      <main className="shop-main">
        <div className="cart-container">
          <div className="cart-label">
            <h1 className="label-text">
              Your purchases will sequester <br></br>
              {Math.round(sequestered)} pounds of Carbon Dioxide (CO2).{" "}
              <br></br>Congrats!
            </h1>
          </div>
          <div className="shopping-cart">
            <i className="fas fa-shopping-cart cart-icon fa-2x wiggly"></i>
            <p className="cart-count">{cart}</p>
          </div>
          <div className="strategies">
            <ul className="user-sustainable-practices">
              {strategies.length > 1 &&
                strategies.length < 5 &&
                strategies.map((strat) => {
                  return <li>{strat}</li>;
                })}
            </ul>
          </div>
        </div>

        <div className="product-tile-holder">
          {/* generate product tiles based on inventory  */}
          {/* {productTileGenerator(products)}  */}
          {Products.map((product) => {
            return (
              <ProductTile
                key={product.key}
                id={product.id}
                source={product.source}
                alternative={product.alternative}
                name={product.name}
                description={product.description}
                price={product.price}
                carbon={product.carbon}
                addPurchases={addPurchases}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <p>What are some things you are doing to mitigate climate change?</p>
          <input
            name="mitigation-strategies"
            value={input}
            onChange={handleStrategies}
            placeholder="E.g. I buy more unpackaged whole foods."
          ></input>
        </form>
      </main>
    </div>
  );
}

export default Shop;
