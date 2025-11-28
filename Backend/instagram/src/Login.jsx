
import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    passWord: ""
  });

  function handleLoginChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();

    // ❗ Step 1: Blank input check
    if (!login.email || !login.passWord) {
      alert("Please enter email and password");
      return;
    }

    try {
      // ❗ Step 2: Call backend
      let res = await axios.post("http://localhost:4000/login", login);

      // ❗ Step 3: Check backend response
      if (res.data.success === true) {

        // Token save
        localStorage.setItem("token", res.data.token);

        // alert(res.data.message);
        navigate("/Home");

      } else {
        alert(res.data.message);
      }

    } catch (err) {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="instagram-logo">Instagram</div>

        <input
          type="text"
          name="email"
          placeholder="Phone number, username or email address"
          value={login.email}
          onChange={handleLoginChange}
          className="input-field"
        />

        <input
          type="password"
          name="passWord"
          placeholder="Password"
          value={login.passWord}
          onChange={handleLoginChange}
          className="input-field"
        />

        <button onClick={handleLoginSubmit} className="login-button">
          Log in
        </button>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">OR</span>
          <div className="divider-line"></div>
        </div>

        <button className="facebook-login">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            viewBox="0 0 24 24" fill="#385185">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 
            4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 
            1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 
            0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 
            23.027 24 18.062 24 12.073z" />
          </svg>
          Log in with Facebook
        </button>

        <div className="forgot-link">
          <Link to="/forgetPassword">Forgotten your password?</Link>
        </div>
      </div>

      <div className="signup-box">
        <span>Don't have an account? </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;


