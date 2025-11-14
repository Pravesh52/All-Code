import React, { useState } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [isSignup, setIsSignup] = useState(true);

  const [signup, setSignup] = useState({
    userName: "",
    email: "",
    passWord: "",
    role: "user",
  });

  const [login, setLogin] = useState({
    email: "",
    passWord: "",
    role: "user",
  });

  // SIGNUP INPUT CHANGE
  function handleSignupChange(e) {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  // LOGIN INPUT CHANGE
  function handleLoginChange(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  // SIGNUP SUBMIT
  async function handleSignupSubmit(e) {
    e.preventDefault();

    try {
      let res = await axios.post("http://localhost:4000/create", signup);
      alert(res.data); // backend ka message
    } catch (err) {
      alert("Signup Error");
    }
  }

  // LOGIN SUBMIT
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
      <div className="toggle-btns">
        <button
          className={isSignup ? "active" : ""}
          onClick={() => setIsSignup(true)}
        >
          Signup
        </button>

        <button
          className={!isSignup ? "active" : ""}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
      </div>

      {/* SIGNUP FORM */}
      {isSignup && (
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
      )}

      {/* LOGIN FORM */}
      {!isSignup && (
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
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
