import React, {useState} from "react";

function Register(){

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
    <h1>Welcome {contact.fName} {contact.lName}</h1>
    <p>{contact.email}</p>
    <input name="fName" onChange={handleChange} placeholder="First Name"></input>
    <input name="lName" onChange={handleChange} placeholder="Last Name"></input>
    <input name="email" onChange={handleChange} placeholder="Email"></input>
    <button>Register</button>
    </div>
  )
}

export default Register;