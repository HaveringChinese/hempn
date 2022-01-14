import React, { useState, useEffect } from "react";
import Greeting from "./Greeting";
import Field from "../images/hemp-field.jpg"; 
import Haze from "../images/hemp-haze.jpg"; 
import Single from "../images/single-hemp.jpg"; 
import Wakefilde from "../images/wakefilde-on-a-green.jpg";
 
 const pics = [
  {
    key: 1,
    source: Field,
    alternative: "sunshine streaming down onto a field of hemp",
    className: "carousel-image"
  },
  
  {key: 2,
    source: Haze,
    alternative: "mountain valley field of hemp",
    className: "carousel-image"
  },
  
  {key: 3,
    source: Single,
    alternative: "closeup of a hazy patch of hemp",
    className: "carousel-image"
  },

  {key: 4,
    source: Wakefilde,
    alternative: "closeup of a hazy patch of hemp",
    className: "carousel-image"
  },

];


function Initial(props){

  
  const [pageClicked, setClicked] = useState("initial");
  const [image, setImage] = useState(0);
  
 

  function handlePageClick(event){
    setClicked(event.target.name);
    console.log("button clicked is " + event.target.name);
     };

     useEffect(() => {
      return props.handlePageChange(pageClicked);
   }, [props, pageClicked]);

  function cycleLeft(){
      if (image > 0){
        setImage(image - 1)
      } else {
        setImage(3)
      }
    };

    function cycleRight(){
      if (image < pics.length - 1){
        setImage(image + 1)
      } else {
        setImage(0)
      }
    };

    function assignColors(){
      let lefty = document.getElementById("left-nav-button");
      let righty = document.getElementById("right-nav-button");
      if (document.querySelector(".buttons") && (image === 2 || image === 3)){
       lefty.classList.add("dark-text");
       righty.classList.add("dark-text");
      } else if ((image === 0 || image === 1) && (lefty.classList.contains("dark-text") && (righty.classList.contains("dark-text")))){
        lefty.classList.remove("dark-text");
        righty.classList.remove("dark-text");
      } else {
        return null;
      }
    }
    if (document.querySelector(".buttons")){
    assignColors();
    };

  return (
    <div className="initial">
      
      <Greeting/>
     
      {image === 0 && <img className = {pics[0].className} src = {pics[0].source} alt = {pics[0].alternative}></img>}
      {image === 1 && <img className = {pics[1].className} src = {pics[1].source} alt = {pics[1].alternative}></img>}
      {image === 2 && <img className = {pics[2].className} src = {pics[2].source} alt = {pics[2].alternative}></img>}
      {image === 3 && <img className = {pics[3].className} src = {pics[3].source} alt = {pics[3].alternative}></img>}

      <div className="carousel-buttons">
        <button className="leftward-button" onClick={cycleLeft} name="left">←</button>
        <button className="rightward-button" onClick={cycleRight} name="right">→</button>
      </div>

      <div className="buttons">
        <button  id="left-nav-button" className="nav-button" onClick={handlePageClick} name="shop">Purchase Hemp-based Products</button>
        <button id="right-nav-button" className="nav-button" onClick={handlePageClick} name="grow">Start Growing, Start Earning</button>
      </div>
      
    </div>
  )
}

export default Initial;
