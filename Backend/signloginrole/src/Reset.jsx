import React from 'react'
// import './App.css'
import './Reset.css';
import Footer from "./components/Footer";

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";


const Reset = () => {
     let [newPassword, setNewPassword] = useState('')
  let  parameter = useParams()
  let token = parameter.token
  console.log(token);
  
    function fun1(e){
        setNewPassword(e.target.value)
    }
    async function fun2(){
        try{
            let res = await axios.post(`http://localhost:4000/reset-password/${token}`,{newPassword});
            alert(res.data)
        }
        catch(error){
            alert(error)
            console.log(error);
        }
    }
  return (
    <div className='mainDiv'>

            <div className="footer-container">
    
                 <Footer />
             </div>

        <div className='fields'>
            <h1>Reset Password</h1>
            <input style={{width:"380px"}} type="password" name='newPassword' value={newPassword} onChange={fun1} placeholder='Enter new Password'/>
            <button onClick={fun2} id='btn'>Set Password</button>

        <p className="login-link">
          <Link to="/login">Go to Login Page</Link>
        </p>
        </div>
    </div>
  )
}

export default Reset