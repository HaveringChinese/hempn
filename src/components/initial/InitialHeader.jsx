import React from "react";

const timeOfDay = new Date().getHours();

function InitialHeader() {


  return(
    <div className="header">
      
      {timeOfDay < 12 && <p>"Good Morning!"</p>}
      {timeOfDay > 12 && timeOfDay < 19 && <p>"Good Afternoon!"</p>}
      {timeOfDay >= 19 && <p>"Good Evening!"</p>}


    </div>
  )
}

export default InitialHeader;
