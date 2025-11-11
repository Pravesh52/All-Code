import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css';

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    passWord: ""
  });

  function loginFun(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  async function done() {
    try {
      console.log("DATA GOING TO BACKEND:", input);

      const res = await axios.post("http://localhost:4000/login", input, {
      });

      console.log("SERVER RESPONSE →", res.data);
      

    } catch (error) {
      console.log("ERROR:", error);
    }
  }

  return (
    <div>
      <fieldset> 
        <legend>login page</legend> 
        <input 
          type='email'
          onChange={loginFun}
          name='email'
          value={input.email}
          placeholder='Enter your email'
        />

        <br/><br/>

        <input 
          type='password'
          onChange={loginFun}
          name='passWord'
          value={input.passWord}
          placeholder='Enter your pass'
        />

        <br/><br/>

        <button onClick={done}>login</button>
      </fieldset>

      <fieldset>
        <Link to={'/'}>
          <button>signup</button>
        </Link>
      </fieldset>
    </div>
  )
}

export default Login;