import React, {useState} from "react";

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
    <div>
    <div>
    <h1>Hempn</h1>
    <p>Our 5 Year Mission: To Boldly Grow Hemp Where No One Has Grown Before</p>
    <ul>
      <li>Maximum Profits For Growers</li>
      <li>Minimum Hassle For Busy People</li>
      <li>Maximum Air Purification and Carbon Sequestration</li>
      <li>Maximum Material Repurposing</li>
    </ul>
  </div>
    
    <main>
    <form onSubmit={handleSubmit}>
    <h1>What are some things you are doing to mitigate climate change?</h1>
    <input name="mitigation-strategies" value={input} onChange={handleStrategies} placeholder="E.g. I buy more unpackaged whole foods."></input>
    </form>
    <ul>
      {strategies.map((strat) => {
        return <li>{strat}</li>
      })}
    </ul>
    </main>   
</div>
  )
}

export default Main;