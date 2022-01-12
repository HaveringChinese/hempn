import React from "react";

const timeOfDay = new Date().getHours();

function Greeting() {


  return(
    <div className="greeting">
      
      {timeOfDay > 0 && timeOfDay < 12 && <p>Good Morning!</p>}
      {timeOfDay > 12 && timeOfDay < 19 && <p>Good Afternoon!</p>}
      {timeOfDay >= 19 && timeOfDay < 24 && <p>Good Evening!</p>}


    </div>
  )
}

export default Greeting;
