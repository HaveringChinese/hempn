import React from "react";
import * as M from "materialize-css";

function Calculator(props){

  M.AutoInit();

return (
  <div>

      <select>
        <option value="" disable selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>



  </div>
)
}


export default Calculator;