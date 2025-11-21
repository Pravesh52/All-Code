import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";

const ForgetPassword = () => {

  const [forgotEmail, setForgotEmail] = useState("");

  async function handleForgotSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:4000/reset-password", {
        email: forgotEmail,
      });
      alert(res.data);
    } catch (err) {
      alert("Error sending reset email");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box forgot-page">

        <div className="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" 
            viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <h2 className="forgot-title">Trouble logging in?</h2>

        <p className="forgot-description">
          Enter your email and we'll send you a link to get back into your account.
        </p>

        {/* Email Input */}
        <input
          type="text"
          placeholder="Email Address"
          name="forgotEmail"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
          className="input-field"
        />

        {/* SEND LOGIN LINK */}
        <button 
          onClick={handleForgotSubmit} 
          className="login-button">
          Send login link
        </button>

        <a href="#" className="cant-reset">
          Can't reset your password?
        </a>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">OR</span>
          <div className="divider-line"></div>
        </div>

        <Link to="/signup" className="create-account">
          Create new account
        </Link>
      </div>

      <div className="signup-box">
        <Link to="/" className="back-link">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
