import React, {useState} from "react";
import Menu from "./Menu";
import Register from "./Register";

const timeOfDay = new Date().getHours();

function Header() {

  const [clickedRegister, setClickedRegister] = useState("unclicked");

  return(
    <div className="header">
      <button className="menu-button">三</button>
      <button className="account-button"><img alt="profile" className="profile-image" src="../static/images/user.png"></img></button>

      {timeOfDay < 12 && <Menu greeting = "Good Morning!"/>}
      {timeOfDay > 12 && timeOfDay < 19 && <Menu greeting = "Good Afternoon!"/>}
      {timeOfDay >= 19 && <Menu greeting = "Good Evening!"/>}

      {clickedRegister === "clicked" && <Register />}

    </div>
  )
}

export default Header;
