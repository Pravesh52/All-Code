import React, { useState } from 'react'

const Signup = () => {
  let[data,SetData]=useState({
    name:"",
    email:"",
    password:""
  })

  let[show,Setshow]=useState({})

  function fun1(e){
    let {name,value}= e.target
    SetData({...data,[name]:value})
    console.log(data);
  }

  function done(){
    Setshow({...data})
    console.log(show);
    
  } 

  function handleClick() {
  alert(`Name: ${data.name}\nEmail: ${data.email}\nPassword: ${data.password}`);
}

  return (
    <div>

      <input type='text' name='name' value={data.name} onChange={fun1} placeholder='Enter your name'></input>
      <br></br>
      <br></br>
      <input type='email' name='email' value={data.email} onChange={fun1} placeholder='Enter your email'></input>
      <br></br>
      <br></br>
      <input type='password' name='password' value={data.password} onChange={fun1} placeholder='Enter your Password'></input>
      <br></br>
      <br></br>
      <button onClick={handleClick}>aleartClick</button>
      <button onClick={done}>Click</button>
      <h3>{show.name}</h3>
      <h3>{show.email}</h3>
      <h3>{show.password}</h3>

    </div>
  )
}

export default Signup