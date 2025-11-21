

import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import './Reset.css';

const Reset = () => {
  let [newPassword, setNewPassword] = useState('')
  let [confirmPassword, setConfirmPassword] = useState('')

  let parameter = useParams()
  let token = parameter.token
  console.log(token);

  async function fun2() {
    if (newPassword.trim() === "" || confirmPassword.trim() === "") {
      alert("Please enter both passwords!");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Both passwords must match!");
      return;
    }

    try {
      let res = await axios.post(`http://localhost:4000/reset-password/${token}`, { newPassword });
      alert(res.data);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  }

  return (
    <div>
      <div className='fields'>
        <h1>Reset Password</h1>

        <input
          style={{ width: "380px" }}
          type="password"
          placeholder='New Password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          style={{ width: "380px" }}
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button onClick={fun2} id='btn'>Set Password</button>
      </div>
    </div>
  )
}

export default Reset;
