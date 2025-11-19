import React, { useState } from 'react'
import './Forget.css'
import axios from 'axios'
import Footer from "./components/Footer";

const Forget = () => {
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
    <div className="forget-container">

      <div className="footer-container">
        <Footer />
       </div>

      <form className="forget-box" onSubmit={handleForgotSubmit}>
        <h3>Forgot Password?</h3>

        <input
          type="email"
          placeholder="Enter your email"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
        />

        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  )
}

export default Forget;
