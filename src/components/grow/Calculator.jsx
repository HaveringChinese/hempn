import React, { useState } from "react";
// import * as M from "materialize-css";
import QuestionTree from "./QuestionTree";

function Calculator(){

  // M.AutoInit();
  const [selected, updateSelected] = useState("");
  const [counter, updateCounter] = useState(0);
  const [choices, updateChoices] = useState([]);

  function selectSomething(chosen) {
    console.log(chosen);
    updateSelected(chosen);
    updateCounter(counter + 1);
    marshallSelections();
  };

  function marshallSelections(){
    updateChoices((prevChoice) => {
      return [...prevChoice, selected];
    })
  };

  // function evaluateChoices(array){
    
  // };


return (
  <div className="calculator-container">
      {[choices]};

      {counter < QuestionTree.length && ((q) => {
        let q = QuestionTree[counter];
        return <div className="calculator-prompt">
          <select onChange={(e) => {selectSomething(e.target.value)}}>
              <option value="" disable selected>{q.question}</option>
              <option value="1">{q.option1}</option>
              <option value="2">{q.option2}</option>
              <option value="3">{q.option3}</option>
              <option value="4">{q.option4}</option>
          </select>
          <label>Question {q}</label>
        </div>
      })};
    
  </div>
)
}


export default Calculator;