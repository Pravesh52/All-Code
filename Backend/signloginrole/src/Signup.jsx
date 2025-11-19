// import React from 'react'
// import './App.css'
// import { useState } from 'react';
// import axios from 'react'
// const Signup = () => {
//      const [isSignup, setIsSignup] = useState(true);
//     const [signup, setSignup] = useState({
//         userName: "",
//         email: "",
//         passWord: "",
//         role: "user",
//       });
    
//     function handleSignupChange(e) {
//     setSignup({ ...signup, [e.target.name]: e.target.value }); 
//      }

//      async function handleSignupSubmit(e) {
//     e.preventDefault();

//     try {
//       let res = await axios.post("http://localhost:4000/create", signup);
//       alert(res.data); // backend ka message
//     } catch (err) {
//       alert("Signup Error");
//     }
//   }

//   return (
//     <div>
//         <div className="toggle-btns">
//         <button
//           className={isSignup ? "active" : ""}
//           onClick={() => setIsSignup(true)}
//         >
//           Signup
//         </button>
//         </div>

//          <div className="toggle-btns">
//         <button
//           className={isSignup ? "active" : ""}
//           onClick={() => setIsSignup(true)}
//         >
//           Login
//         </button>
//         </div>
        

//         {/* SIGNUP FORM */}
//       {isSignup && (
//         <div className="form-box">
//           <h2>Signup</h2>
//           <form onSubmit={handleSignupSubmit}>
//             <input
//               type="text"
//               name="userName"
//               placeholder="Username"
//               onChange={handleSignupChange}
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleSignupChange}
//             />

//             <input
//               type="password"
//               name="passWord"
//               placeholder="Password"
//               onChange={handleSignupChange}
//             />

//             <select name="role" onChange={handleSignupChange}>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//               <option value="instructor">Instructor</option>
//             </select>

//             <button type="submit">Signup</button>
//           </form>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Signup

import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";

const Signup = () => {
  const [signup, setSignup] = useState({
    userName: "",
    email: "",
    passWord: "",
    role: "user",
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
    <div className="main-container">
       <div>
        <Footer />
        </div>
      <div className="toggle-btns">
        <Link to="/signup">
          <button className="active">Signup</button>
        </Link>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      <div className="form-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignupSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Username"
            onChange={handleSignupChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleSignupChange}
          />

          <input
            type="password"
            name="passWord"
            placeholder="Password"
            onChange={handleSignupChange}
          />

          <select name="role" onChange={handleSignupChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="instructor">Instructor</option>
          </select>

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
