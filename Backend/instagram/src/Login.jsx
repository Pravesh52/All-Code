// import React, { useState } from 'react';
// import './App.css';
// import { Link } from "react-router-dom";
// const Login = () => {
//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');

//   const [login, setLogin] = useState({
//       email: "",
//       passWord: "",
//     });
  
//     function handleLoginChange(e) {
//       setLogin({ ...login, [e.target.name]: e.target.value });
//     }
  
//     async function handleLoginSubmit(e) {
//       e.preventDefault();
//       try {
//         let res = await axios.post("http://localhost:4000/login", login);
//         alert(res.data);
//       } catch (err) {
//         alert("Login Error");
//       }
//     }

//   // const handleSubmit = () => {
//   //   console.log('Login submitted', { username, password });
//   // };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <div className="instagram-logo">Instagram</div>
        
//         <input
//           type="text"
//           placeholder="Phone number, username or email address"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="input-field"
//         />
        
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input-field"
//         />
        
//         <button onClick={handleSubmit} className="login-button">
//           Log in
//         </button>

//         <div className="divider">
//           <div className="divider-line"></div>
//           <span className="divider-text">OR</span>
//           <div className="divider-line"></div>
//         </div>

//         <button className="facebook-login">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#385185">
//             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//           </svg>
//           Log in with Facebook
//         </button>

//         <div className="forgot-link">
//           <a>
//           <Link to="/forgetPassword">Forgotten your password?</Link>
//         </a>
         
//         </div>
//       </div>

//       <div className="signup-box">
//         <span>Don't have an account? </span>
//         <a>
//           <Link to="/signup">Sign up</Link>
//         </a>
        
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";

const Login = () => {

  const [login, setLogin] = useState({
    email: "",
    passWord: ""
  });

  function handleLoginChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:4000/login", login);
      alert(res.data);
    } catch (err) {
      alert("Login Error");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="instagram-logo">Instagram</div>

        {/* EMAIL / USERNAME */}
        <input
          type="text"
          name="email"
          placeholder="Phone number, username or email address"
          value={login.email}
          onChange={handleLoginChange}
          className="input-field"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="passWord"
          placeholder="Password"
          value={login.passWord}
          onChange={handleLoginChange}
          className="input-field"
        />

        {/* LOGIN BUTTON */}
        <button onClick={handleLoginSubmit} className="login-button">
          Log in
        </button>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">OR</span>
          <div className="divider-line"></div>
        </div>

        <button className="facebook-login">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#385185">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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


