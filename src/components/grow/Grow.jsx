import React from "react";
// import M from "materialize-css";
import Calculator from "./Calculator";
// import Wakefilde from "../images/wakefilde-on-a-green.jpg";
// import Balconies from "../images/bernard-hermant-balconies.jpg";
// import Backyard from "../images/zac-gudakov-backyard.jpg";
// import Indoor from "../images/kalei-peek-indoor.jpg";

function Grow(){

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.grow-carousel');
  //   var instance = M.Carousel.init(elems, {
  //     fullWidth: true,
  //     indicators: true
  //   });
  // });
  
  // function focus(){
  //   instance.set();
  // }


  return(
    <div className="grow">

        <div>
          <h1 className="red">To Boldly Grow Hemp</h1>
          <h1 className="deep-purple">Where No One Has Grown Before</h1>
        </div>

        <Calculator/>
        
    {/* <div class="grow-carousel carousel-slider center">
      <div class="carousel-fixed-item center">
        <a class="btn waves-effect white grey-text darken-text-2">button</a>
      </div>
      <div class="carousel-item red white-text" href="#one!">
        <a class="grow-carousel-item" href="#one!"><img src={Wakefilde} alt="field of hemp plants in two distinct tiered rows" onClick={focus}></img></a>
        <h2>First Panel</h2>
        <p class="white-text">This is your first panel</p>
      </div>
      <div class="carousel-item amber white-text" href="#two!">
        <a class="grow-carousel-item" href="#two!"><img src={Backyard} alt="blue sky and 1000 square foot green grassy backyard facing small red house"></img></a>
        <h2>Second Panel</h2>
        <p class="white-text">This is your second panel</p>
      </div>
      <div class="carousel-item green white-text" href="#three!">
        <a class="grow-carousel-item" href="#three!"><img src={Balconies} alt="patch of grass and view upward at highrise of balconies"></img></a>
        <h2>Third Panel</h2>
        <p class="white-text">This is your third panel</p>
      </div>
      <div class="carousel-item blue white-text" href="#four!">
        <a class="grow-carousel-item" href="#four!"><img src={Indoor} alt="green potted plants on a shelf in front of an offwhite indoor wall"></img></a>
        <h2>Fourth Panel</h2>
        <p class="white-text">This is your fourth panel</p>
      </div>
  </div> */}

    </div>
  )
};


export default Grow;