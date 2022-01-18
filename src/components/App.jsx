import React, { useState} from "react";
import Banner from "./constant/Banner";
import Initial from "./initial/Initial.jsx";
import Shop from "./shop/Shop";
import Grow from "./grow/Grow";
import User from "./constant/User";
import About from "./constant/About";


function App(){

  const [page, setPage] = useState('initial');
  const [userMenu, displayUserMenu] = useState(false);

  function handlePageChange(newPage){
    return setPage(newPage);
  };

  function handleUser(){
    console.log(!displayUserMenu);
    return displayUserMenu(!userMenu);
  }
  
  return (
    <div className="App">
    
      <Banner
      className = "header-banner"
      textClassName = "header-banner-text"
      text = "Hempn"
      button = "menu"
      handlePageChange = {handlePageChange}
      handleUser = {handleUser}
      />

      {/* only loads on arrival or when "home" is clicked */}
      {page === "initial" && <Initial handlePageChange = {handlePageChange}/>}

      {/* only loads if "shop" is clicked */}
      {page === "shop" && <Shop />}
      
      {/* only loads if "grow" is clicked */}
      {page === "grow" && <Grow />}

      {/* only loads if "login / register" is clicked */}
      {userMenu === true && <User />}

      {/* only loads if "about" is clicked */}
      {page === "about" && <About />}

      
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