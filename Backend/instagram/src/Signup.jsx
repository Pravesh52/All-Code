// import React, { useState } from 'react';
// import './App.css';
// import { Link } from "react-router-dom";
// const Signup = () => {
//   // const [email, setEmail] = useState('');
//   // const [fullName, setFullName] = useState('');
//   // const [username, setUsername] = useState('');
//   // const [password, setPassword] = useState('');
//   const [signup, setSignup] = useState({
//     userName: "",
//     email: "",
//     passWord: "",
//     fullName:""
//   });

//   function handleSignupChange(e) {
//     setSignup({ ...signup, [e.target.name]: e.target.value });
//   }

//   async function handleSignupSubmit(e) {
//     e.preventDefault();
//     try {
//       let res = await axios.post("http://localhost:4000/create", signup);
//       alert(res.data);
//     } catch (err) {
//       alert("Signup Error");
//     }
//   }

//   // const handleSubmit = () => {
//   //   console.log('Signup submitted', { email, fullName, username, password });
//   // };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <div className="instagram-logo">Instagram</div>
        
//         <p className="signup-tagline">
//           Sign up to see photos and videos from your friends.
//         </p>

//         <button className="facebook-login primary">
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
//             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//           </svg>
//           Log in with Facebook
//         </button>

//         <div className="divider">
//           <div className="divider-line"></div>
//           <span className="divider-text">OR</span>
//           <div className="divider-line"></div>
//         </div>

//         <input
//           type="text"
//           placeholder="Mobile Number or Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="input-field"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="input-field"
//         />
        
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           className="input-field"
//         />
        
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="input-field"
//         />
        
        
//         <button onClick={handleSubmit} className="login-button">
//           Sign up
//         </button>

//         <p className="terms-text">
//           By signing up, you agree to our{' '}
//           <a href="#">Terms</a>,{' '}
//           <a href="#">Privacy Policy</a> and{' '}
//           <a href="#">Cookies Policy</a>.
//         </p>
//       </div>
       
//       <div className="signup-box">
//         <span>Have an account? </span>
//         <a>
//         <Link to="/">Log in</Link>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";

const Signup = () => {

  const [signup, setSignup] = useState({
    userName: "",
    email: "",
    passWord: "",
    fullName: ""
  });

  function handleSignupChange(e) {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:4000/create", signup);
      alert(res.data);
    } catch (err) {
      alert("Signup Error");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="instagram-logo">Instagram</div>
        
        <p className="signup-tagline">
          Sign up to see photos and videos from your friends.
        </p>

        {/* OR Divider */}
        <button className="facebook-login primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Log in with Facebook
        </button>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">OR</span>
          <div className="divider-line"></div>
        </div>

        {/* EMAIL */}
        <input
          type="text"
          name="email"
          placeholder="Mobile Number or Email"
          value={signup.email}
          onChange={handleSignupChange}
          className="input-field"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="passWord"
          placeholder="Password"
          value={signup.passWord}
          onChange={handleSignupChange}
          className="input-field"
        />

        {/* FULL NAME */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={signup.fullName}
          onChange={handleSignupChange}
          className="input-field"
        />

        {/* USERNAME */}
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={signup.userName}
          onChange={handleSignupChange}
          className="input-field"
        />

        <button onClick={handleSignupSubmit} className="login-button">
          Sign up
        </button>

        <p className="terms-text">
          By signing up, you agree to our{' '}
          <a href="#">Terms</a>,{' '}
          <a href="#">Privacy Policy</a> and{' '}
          <a href="#">Cookies Policy</a>.
        </p>
      </div>

      <div className="signup-box">
        <span>Have an account? </span>
        <Link to="/">Log in</Link>
      </div>
    </div>
  );
};

export default Signup;
