import React, {useState} from "react";
import ProductTile from "./ProductTile";
import SingleHemp from "../images/single-hemp.jpg";

function Main(){

  const [input, setInput] = useState("");
  const [strategies, setStrategies] = useState([]);

  function handleStrategies(event){
    const newInput = event.target.value;
    setInput(newInput);
  }

  function handleSubmit(event){
    event.preventDefault();
    setStrategies(prevStrat => {
      return [...prevStrat, input]
    });
    setInput("");
  }

  return (
    <div className="main">
      
      <div className="main-header">
        <img src={SingleHemp} className="main-header-image" alt="single hemp plant"></img>
        <div className="main-header-text">
          <p>Our 5 Year Mission: To Boldly Grow Hemp Where No One Has Grown Before</p>
          <ul>
            <li>Maximum Profits For Growers</li>
            <li>Minimum Hassle For Busy People</li>
            <li>Maximum Air Purification and Carbon Sequestration</li>
            <li>Maximum Material Repurposing</li>
          </ul>
        </div>
    </div>
      
      <main>
       
      <ProductTile 
      name = "hemp (raw)"
      description = "Bulk industrial hemp."
      price = "$.40/lb"
      />

      </main>

      <form onSubmit={handleSubmit}>
      <h1>What are some things you are doing to mitigate climate change?</h1>
      <input name="mitigation-strategies" value={input} onChange={handleStrategies} placeholder="E.g. I buy more unpackaged whole foods."></input>
      </form>
      <ul>
        {strategies.map((strat) => {
          return <li>{strat}</li>
        })}
      </ul>

</div>
  )
}

export default Main;