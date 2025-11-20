import React, { useState } from 'react';
import './App.css';

const ForgetPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');

  const handleSubmit = () => {
    console.log('Reset link sent to:', emailOrUsername);
  };

  return (
    <div className="auth-container">
      <div className="auth-box forgot-page">
        <div className="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        
        <h2 className="forgot-title">Trouble logging in?</h2>
        
        <p className="forgot-description">
          Enter your email, phone, or username and we'll send you a link to get back into your account.
        </p>

        <input
          type="text"
          placeholder="Email, Phone, or Username"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="input-field"
        />
        
        <button onClick={handleSubmit} className="login-button">
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

        <a href="#" className="create-account">
          Create new account
        </a>
      </div>

      <div className="signup-box">
        <a href="#" className="back-link">Back to login</a>
      </div>
    </div>
  );
};

export default ForgetPassword;