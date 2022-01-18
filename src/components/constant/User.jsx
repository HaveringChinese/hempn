import React, {useState} from "react";
// import Flower from "../images/david-gabric-flower.jpg";
// import ColorfulHemp from "../images/kym-mackinnon-colorful-hemp.jpg";

function User(){
  const [userAction, setUserAction] = useState("");
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

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
  };
  
  return (
    <div className="login-register">

      <div className="user-actions">
        <button onClick={setUserAction("login")} name="login">Login</button>
        <button onClick={setUserAction("register")} name="register">Register</button>
      </div>

      {userAction === "login" && <div className="login">
        {/* <img src={ColorfulHemp} className="carousel-image" alt="hemp field with colorful sunset background"></img> */}
        <h1>Login {contact.fName} {contact.lName}</h1>
        <p>{contact.email}</p>
        <input name="fName" onChange={handleChange} placeholder="First Name"></input>
        <input name="lName" onChange={handleChange} placeholder="Last Name"></input>
        <input name="email" onChange={handleChange} placeholder="Email"></input>
        <button>Login</button>
      </div>
      };

      {userAction === "register" && <div className="register">
      {/* <img src={Flower} className="carousel-image" alt="child holding single hemp flower into the sun"></img> */}
      <h1>Register {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <input name="fName" onChange={handleChange} placeholder="First Name"></input>
      <input name="lName" onChange={handleChange} placeholder="Last Name"></input>
      <input name="email" onChange={handleChange} placeholder="Email"></input>
      <button>Register</button>
      </div>
      };

    </div>
  )
}


export default User; 




