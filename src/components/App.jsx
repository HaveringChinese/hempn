import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import ImageCarousel from "./ImageCarousel";
import Menu from "./Menu";
import Main from "./Main";
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

    <img alt="field of hemp" className="hemp-field" src></img>

    
    {timeOfDay < 12 && <Menu greeting = "Good Morning!"/>}
    {timeOfDay > 12 && timeOfDay < 19 && <Menu greeting = "Good Afternoon!"/>}
    {timeOfDay >= 19 && <Menu greeting = "Good Evening!"/>}

    <Main />
    

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