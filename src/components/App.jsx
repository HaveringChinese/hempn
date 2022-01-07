import React, { useState} from "react";
import Banner from "./constant/Banner";
import Initial from "./initial/Initial.jsx";
import Main from "./shop/Main";
import Grow from "./grow/Grow";


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
      handlePageChange = {handlePageChange}
      />

      {/* only loads on arrival */}
      {page === "initial" && <Initial 
      handlePageChange = {handlePageChange}      
      />
      };


      {/* only loads if "shop" is clicked */}
      {page === "shop" && <Main />}
      

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