import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import Menu from "./Menu";
import ProductTile from "./ProductTile";

const timeOfDay = new Date().getHours();

function App(){

  const date = new Date().getFullYear();

  return (
    <div>
    <Banner 
    className = "header"
    />
    <Header />
    <ImageCarousel />

    <img alt="field of hemp" className="hemp-field"></img>

    
    {timeOfDay < 12 && <Menu greeting = "Good Morning!"/>}
    {timeOfDay > 12 && timeOfDay < 19 && <Menu greeting = "Good Afternoon!"/>}
    {timeOfDay >= 19 && <Menu greeting = "Good Evening!"/>}


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

    <ProductTile 
    name = "hemp (raw)"
    description = "Bulk industrial hemp."
    price = "$.40/lb"
    />
    
    <p>Copyright {date}</p>
    <Banner className="footer" />

    </div>
  )
}

export default App;