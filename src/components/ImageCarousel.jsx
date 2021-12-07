import React, {useState} from "react";
import carouselPics from "./images";

function ImageCarousel(){

  var i = 0;
  var counter = carouselPics.length;
  const [carouselImage, setCarouselImage] = useState(carouselPics[i].source);
  const [carouselAltText, setCarouselAltText] = useState(carouselPics[i].alternative);
  
  console.log(carouselPics[0].source);

  function carouselCycleCounter(){
    counter-=1;
    if(counter===0){
      i = 0;
    }
  }

  function cycleCarousel(){
    i++;
    setCarouselImage(carouselPics[i].source);
    setCarouselAltText(carouselPics[i].alternative);
    carouselCycleCounter();
}

// setInterval(cycleCarousel, 2000);


  return (
    <div>

      <div className="carouselStructure">
      <img src={carouselImage} alt={carouselAltText}></img>
      <img src="public/images/hemp-field.jpg" alt="ll"></img>

      </div>
    </div>
  )
}

export default ImageCarousel;