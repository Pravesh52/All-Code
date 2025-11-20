import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import './App.css';
import image from './assets/landing-2x.png'


const Clone = () => {
  const [currentPage, setCurrentPage] = useState('login');

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="content-wrapper">
          <div className="phone-section">
            <div className="phone-mockup">
              <div className="phone-screen">
                <img 
                  src={image}
                  alt="Instagram screenshot" 
                />
              </div>
            </div>
          </div>

          <div className="auth-section">
            {/* <div className="page-switcher"> */}
              {/* <button 
                className={currentPage === 'login' ? 'active' : ''}
                onClick={() => setCurrentPage('login')}
              >
                Login
              </button> */}
              
              {/* <button 
                className={currentPage === 'signup' ? 'active' : ''}
                onClick={() => setCurrentPage('signup')}
              >
                Sign Up
              </button>
              <button 
                className={currentPage === 'forget' ? 'active' : ''}
                onClick={() => setCurrentPage('forget')}
              >
                Forgot
              </button> */}
            {/* </div> */}

            {currentPage === 'login' && <Login />}
            {currentPage === 'signup' && <Signup />}
            {currentPage === 'forget' && <ForgetPassword />}

            <div className="get-app">
              <p>Get the app.</p>
              <div className="app-buttons">
                <img 
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" 
                  alt="Get it on Google Play" 
                />
                <img 
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" 
                  alt="Download on the App Store" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Meta AI</a>
          <a href="#">Meta AI articles</a>
          <a href="#">Threads</a>
          <a href="#">Contact uploading and non-users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="footer-bottom">
          <select className="language-select">
            <option>English (UK)</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
};

export default Clone;