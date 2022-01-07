import React, { useState, useEffect } from "react";
import Header from "./Header";
import field from "./images/hemp-field.jpg"; 
import haze from "./images/hemp-haze.jpg"; 
import single from "./images/single-hemp.jpg"; 
import wakefilde from "./images/wakefilde-on-a-green.jpg"; 
 
 const pics = [
  {
    key: 1,
    source: field,
    alternative: "sunshine streaming down onto a field of hemp",
    className: "carousel-image"
  },
  
  {key: 2,
    source: haze,
    alternative: "mountain valley field of hemp",
    className: "carousel-image"
  },
  
  {key: 3,
    source: single,
    alternative: "closeup of a hazy patch of hemp",
    className: "carousel-image"
  },

  {key: 4,
    source: wakefilde,
    alternative: "closeup of a hazy patch of hemp",
    className: "carousel-image"
  },

];


function Initial(props){

  
  const [pageClicked, setClicked] = useState("");
  const [image, setImage] = useState(0);
  
  function handlePageClick(event){
    setClicked(event.target.name);
    console.log("button clicked is " + event.target.name);
    };
  

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

    // useEffect(() => {
    //   console.log(pageClicked, image)

    //   // if (image === "right" && location < pics.length){
    //   //   location ++;
    //   // } else if (image === "left" && location > 0){
    //   //   location --;
    //   // } else {
    //   // }


    //   // return props.handlePageChange(pageClicked)
      
    //   }, [pageClicked, image]);


  return (
    <div className="initial">
      
      <Header/>
     
      {image === 0 && <img className = {pics[0].className} src = {pics[0].source} alt = {pics[0].alternative}></img>}
      {image === 1 && <img className = {pics[1].className} src = {pics[1].source} alt = {pics[1].alternative}></img>}
      {image === 2 && <img className = {pics[2].className} src = {pics[2].source} alt = {pics[2].alternative}></img>}
      {image === 3 && <img className = {pics[3].className} src = {pics[3].source} alt = {pics[3].alternative}></img>}

      <div className="carousel-buttons">
        <button className="leftward-button" onClick={cycleLeft} name="left"></button>
        <button className="rightward-button" onClick={cycleRight} name="right">Right</button>
      </div>

      <div className="buttons">
        <button className="left-button" onClick={handlePageClick} name="shop">Purchase Hemp-based Products</button>
        <button className="right-button" onClick={handlePageClick} name="grow">Start Growing, Start Earning</button>
      </div>
      
    </div>
  )
}

export default Initial;
