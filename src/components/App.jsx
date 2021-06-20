import React, { useState } from "react";

function App() {
// the way i did this
  // var [fName, setFName] = useState("");
  // var [lName, setLName] = useState("");

  // function handleFName(event){
  //   setFName(event.target.value)
  // }

  // function handleLName(event){
  //   setLName(event.target.value)
  // }


  // angela's method
var [fullName, setFullName] = useState({fName:"", lName:""})

function handleChange(event){
  var {name, value} = event.target;
  setFullName(preValue => {
    if (name === "fName"){
       return {fName:value, lName:preValue.lName}
    }else if(name === "lName"){
      return {fName:preValue.fName, lName:value}
    }
  })
}

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" value={fullName.fName} onChange={handleChange} placeholder="First Name" />
        <input name="lName" value={fullName.lName} onChange={handleChange} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
