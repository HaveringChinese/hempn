import React, {useState} from "react";
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

]


function Initial(props){
  
  var location = pics[props.number];

  const [pageClicked, setClicked] = useState("");
  const [directionClicked, setDirectionClicked] = useState("");

  function handlePageClick(event){
    setClicked(event.target.name);
    console.log("button clicked is " + event.target.name);
    props.handlePageChange(pageClicked);
    console.log(pageClicked);
  };

  function handleDirection(event){
    setDirectionClicked(event.target.name)
    if (directionClicked === "right"){
      while (location < pics.length){
        location ++;
      }
     } else if (directionClicked === "left"){
        while (location > -1){
          location --;
        };
      };
    };


  return (
    <div className="initial">
      <Header/>
      <img className = {location.className} src = {location.source} alt = {location.alternative}></img>
      <div className="buttons">
        <button className="left-button" onClick={handlePageClick} name="shop">Purchase Hemp-based Products</button>
        <button className="right-button" onClick={handlePageClick} name="grow">Start Growing, Start Earning</button>
      </div>
      <div className="carousel-buttons">
        <button className="leftward-button" onClick={handleDirection} name="left">Left</button>
        <button className="rightward-button" onClick={handleDirection} name="right">Right</button>
      </div>
    </div>
  )
}

export default Initial;
