import React, { useState } from "react";
// import * as M from "materialize-css";
import QuestionTree from "./QuestionTree";

function Calculator(){

  // M.AutoInit();
  const [counter, updateCounter] = useState(0);
  const [choices, updateChoices] = useState([]);
  var capacity = 0;

  function select(chosen) {
    console.log(chosen);
    updateCounter(counter + 1);
    updateChoices((prevChoice) => {
      return [...prevChoice, chosen];
    });
  };

  function calculateCapacity(array){

    var availableLand = parseInt(array[2]);
    var outdoorCapacity = (land) => {
      if(land === 1){
        return 5000
      } else if (land === 2){
        return 4000
      } else if (land === 3){
        return 500
      } else if (land === 4){
        return 0
      } else {
        console.log("land error")
      }
    };
    
    var indoorCapacity = (100 - (array[3] * 15));
    var latitude = parseInt(array[0]);
    var latitudeFactor = (lat) => {
      if(lat === 1){
        return 1
      } else if (lat === 2){
        return 0.95
      } else if (lat === 3){
        return 0.75
      } else if (lat === 4){
        return 0.5
      } else {
        console.log("latitude factor error")
      }
    };
    var totalCapacity = (outdoorCapacity(availableLand) + indoorCapacity) * latitudeFactor(latitude);
  
    return capacity = Math.round(totalCapacity);
    }

  if (choices.length >= 4){
    calculateCapacity(choices);
  }

  let questionSet = QuestionTree[counter];


return (
  <div className="calculator-container">
      <h1>{choices}</h1>

      {counter === QuestionTree.length && <div className="growth-capacity-display">
        <h1>Based on your answers, you could likely grow at least {capacity.toLocaleString()} pounds of hemp each year.</h1> 
      <h1>That's approximately {(capacity / 2000).toLocaleString()} tons of CO2 you would sequester each year!</h1>
      <h1>And on top of that, you could earn as much as ${(capacity * 0.65).toLocaleString()} for growing hemp grain, ${(((capacity * 4.5) / 2000) * 260).toLocaleString()} for hemp fiber, and ${(capacity * 30).toLocaleString()} for growing CBD oil.</h1>
      </div>} 

      {counter < QuestionTree.length && <div className="growth-calculator">
            <h1>{questionSet.question}</h1>
            <h3>Please Choose One</h3>
            <form id="growth-calculator" onClick={(event) => {
              event.preventDefault();
              let eventInteger = event.target.name;
              return select(eventInteger)}}>
              <button value="1" name={1}>{questionSet.option1}</button>
              <button value="2" name={2}>{questionSet.option2}</button>
              <button value="3" name={3}>{questionSet.option3}</button>
              <button value="4" name={4}>{questionSet.option4}</button>
            </form>
          </div>}
  </div>
)
}


export default Calculator;