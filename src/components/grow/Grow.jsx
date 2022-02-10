import React from "react";
import Calculator from "./Calculator";
import { Carousel } from "react-materialize";
import Wakefilde from "../images/wakefilde-on-a-green.jpg";
import Balconies from "../images/bernard-hermant-balconies.jpg";
import Backyard from "../images/zac-gudakov-backyard.jpg";
import Indoor from "../images/kalei-peek-indoor.jpg";

function Grow(){



  return (
    <div className="grow">

        {/* <div className="grow-header">
          <h1 className="red">To Boldly Grow Hemp</h1>
          <h1 className="deep-purple">Where No One Has Grown Before</h1>
        </div> */}

    {/* <div className="carousel-container">
        <Carousel 
        carouselId="grow-carousel"
        images={[
          Wakefilde,
          Balconies,
          Backyard,
          Indoor
        ]}
        options={{
          fullWidth: true,
          indicators: true,
          centerImages: false
        }}
        fixedItem = {<div> 
          {"No matter your living situation, you can get Hempn today!"}
        </div>}

        />
      </div> */}

      <Calculator/>

    </div>
  )
};


export default Grow;