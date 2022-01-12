import React, {useState} from "react";
import ColorfulHemp from "../images/kym-mackinnon-colorful-hemp.jpg";

function Login(){

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  function handleChange(event){
    const {name, value} = event.target;

    setContact(prevValue => {

      if(name==="fName"){
        return {...prevValue, fName: value}
      } else if (name==="lName"){
        return {...prevValue, lName: value}
      } else {
      return {...prevValue, email: value}
      }
    })
  }
  
  return (
    <div>
    <img src={ColorfulHemp} className="carousel-image" alt="hemp field with colorful sunset background"></img>
    <h1>Welcome {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    <input name="fName" onChange={handleChange} placeholder="First Name"></input>
    <input name="lName" onChange={handleChange} placeholder="Last Name"></input>
    <input name="email" onChange={handleChange} placeholder="Email"></input>
    <button>Login</button>
    </div>
  )
}

export default Login;