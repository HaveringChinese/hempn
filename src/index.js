import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/css/App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.css";

ReactDOM.render(
  <>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1'></meta>  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  </head>
  <App />
  </>
  ,
  document.getElementById("root"),
);
