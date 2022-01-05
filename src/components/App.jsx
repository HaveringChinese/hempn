import React, {useState} from "react";
import Banner from "./Banner";
import Initial from "./Initial.jsx";
import Main from "./Main";
import ProductTile from "./ProductTile";
import Grow from "./Grow";


function App(){

  const [page, setPage] = useState('initial');

  function handlePageChange(newPage){
    return setPage(newPage);
  };


  return (
    <div className="App">
    
      <Banner 
      className = "header-banner"
      textClassName = "header-banner-text"
      text = "Hempn"
      button = "menu"
      />

      {/* only loads on arrival */}
      {page === "initial" && <Initial 
      handlePageChange = {handlePageChange}
      number = {0}
      
      />
      };


      {/* only loads if "shop" is clicked */}
      {page === "shop" && <Main />}
      {page === "shop" && 
      <ProductTile 
      name = "hemp (raw)"
      description = "Bulk industrial hemp."
      price = "$.40/lb"
      />}

      {/* only loads if "grow" is clicked */}
      {page === "grow" && <Grow />}
      
      <Banner 
      className = "footer-banner"
      textClassName = "footer-banner-text"
      text = "Copyright "
      date = "date"
      />

    </div>
  )
}

export default App;