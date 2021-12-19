import React from "react";
import M from "materialize-css";

function Menu(props){

  M.AutoInit();

  return (
    <div>
      <div className="menu-header">
        <h1>三 {props.greeting}</h1>
        <h2>Hempn</h2>
        <p>To Boldly Grow Hemp</p>
        <p>Where No One Has Grown Before</p>
      </div>

      <select>
        <option value="" disable selected>Choose your option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <label>Materialize Select</label>
    </div>
  )
};




export default Menu;