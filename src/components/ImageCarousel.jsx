import React, {useState} from "react";
import CarouselPics from "../data/images";

function ImageCarousel(){

  const [carouselImage, setCarouselImage] = useState("../public/static/images/hemp background 1.jpg");
  const [carouselAltText, setCarouselAltText] = useState("sunshine streaming down onto a field of hemp");

  function cycleCarousel(){
    setCarouselImage()
}

setInterval(cycleCarousel, 5000);


  return (
    <div>

      <div className="carouselStructure">

      <img src={carouselImage} alt={carouselAltText}></img>


      </div>
    </div>
  )
}

export default ImageCarousel;