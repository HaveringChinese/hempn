import React from "react";
import Banner from "./Banner";
import Initial from "./Initial.jsx";
import Main from "./Main";
import ProductTile from "./ProductTile";
import { useState } from "react";

const date = new Date().getFullYear();

function App(){

  const [page, setPage] = useState('initial');


  return (
    <div>
    <Banner 
    className = "header-banner"
    textClassName = "header-banner-text"
    text = "Hempn"
    />

    {/* <ImageCarousel /> */}

    {page === "initial" && <Initial number = {0}/>}

    {/* <img alt="field of hemp" className="hemp-field" src></img> */}

    {/* only loads if "shop" is clicked */}
    {page === "shop" && <Main />}
    {page === "shop" && 
    <ProductTile 
    name = "hemp (raw)"
    description = "Bulk industrial hemp."
    price = "$.40/lb"
    />}
    
    <Banner 
    className = "footer-banner"
    textClassName = "footer-banner-text"
    text = "Copyright "
    date = {date}
     />

    </div>
  )
}

export default App;