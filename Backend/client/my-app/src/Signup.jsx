import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import './Signup.css';
const Signup = () => {
 const [input, setInput] = useState({
    username:"",
    email: "",
    passWord: ""
  });

  function signupfun(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  async function done() {
    try {
      console.log("DATA GOING TO BACKEND:", input);

      const res = await axios.post("http://localhost:4000/create", input, {
      });

      console.log("SERVER RESPONSE →", res.data);

    } catch (error) {
      console.log("ERROR:", error);
    }
  }
  return (
    <div>
        <fieldset>

          <span>Signup Page</span>
     
            <br/>
            <span>username:</span>
            <input
            type='text'
          onChange={signupfun}
          name='username'
          value={input.username}
          placeholder='Enter your username'
            />
            <br/>
            <br/>
            <span>email:</span>
            <input
            type='email'
          onChange={signupfun}
          name='email'
          value={input.email}
          placeholder='Enter your email'
            /> 
            <br/>
            <br/>
            
            <span>Password:</span>
            <input
            type='password'
          onChange={signupfun}
          name='passWord'
          value={input.passWord}
          placeholder='Enter your pass'
            />
            <br/>
            <br/>

            <button onClick={done}>Signup</button>

            <Link to={'/login'}>
            <button>goto login</button>
            </Link>
        </fieldset>
    </div>
  )
}

export default Signup


