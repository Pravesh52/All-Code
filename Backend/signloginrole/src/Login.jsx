// import React from 'react'
// import './App.css'
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// const Login = () => {
//     const [isSignup, setIsSignup] = useState(true);
//      const [login, setLogin] = useState({
//     email: "",
//     passWord: "",
//     role: "user",
//   });

//     function handleLoginChange(e) {
//     setLogin({ ...login, [e.target.name]: e.target.value });
//   }
//    async function handleLoginSubmit(e) {
//     e.preventDefault();

//     try {
//       let res = await axios.post("http://localhost:4000/login", login);
//       alert(res.data);  
//     } catch (err) {
//       alert("Login Error");
//     }
//   }
//   return (
//     <div>
//            <button
//           className={!isSignup ? "active" : ""}
//           onClick={() => setIsSignup(false)}
//         >
//           Login
//         </button>

//         {!isSignup && (
//         <div className="form-box">
//           <h2>Login</h2>
//           <form onSubmit={handleLoginSubmit}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleLoginChange}
//             />

//             <input
//               type="password"
//               name="passWord"
//               placeholder="Password"
//               onChange={handleLoginChange}
//             />

//             <select name="role" onChange={handleLoginChange}>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//               <option value="instructor">Instructor</option>
//             </select>

//             <button type="submit">Login</button>
//             <Link to= {"/forget"}>
//             <button type="submit">Forget Password</button>
//             </Link>
//           </form>
//           </div>
//         )}

         
//     </div>
//   )
// }

// export default Login

import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    passWord: "",
    role: "user",
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
    <div className="main-container">
         <div>
             <Footer />
        </div>
      <div className="toggle-btns">
        <Link to="/">
          <button>Signup</button>
        </Link>

        <Link to="/login">
          <button className="active">Login</button>
        </Link>
      </div>

      <div className="form-box">
        <h2>Login</h2>

        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleLoginChange}
          />

          <input
            type="password"
            name="passWord"
            placeholder="Password"
            onChange={handleLoginChange}
          />

          <select name="role" onChange={handleLoginChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="instructor">Instructor</option>
          </select>

          <button type="submit">Login</button>

          <Link to="/forget">
            <button type="button" style={{ marginTop: "10px", background: "#555" }}>
              Forgot Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
