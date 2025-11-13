import React from 'react';
import './App.css';
import { useState } from 'react'
import axios from 'axios'
// import {Otp} from '../../Otp';

const App = () => {

  let [mobile, setMobile] = useState({
        phoneNumber:""
    });

    let[mobileotp,setmobileotp]=useState({
      otp:""
    });

    function fun1(e){
        setMobile({...mobile,phoneNumber:e.target.value});
    }
    async function fun2(){
        try{
            let res = await axios.post("http://localhost:4000/send-Otp",mobile)
            alert(res.data.message+" ");
            console.log(res.data);
        }
        catch(error){
            alert(error)
        }
    }

    function fun3(e){
        setmobileotp({...mobileotp,otp:e.target.value});
    }
    async function fun4(){
        try{
            let res = await axios.post("http://localhost:4000/verify",mobileotp)
            alert(res.data.message);
            console.log(res.data.message);
        }
        catch(error){
            alert(error)
        }
    }

  
  return (
    <div className="container">
      <fieldset className="otp-card">
        <legend className="title">Mobile OTP Verification</legend>

        <div className="input-group">
          <label>Enter Mobile Number:</label>
          <input
           type="text"
           placeholder="Enter your number"
            value={mobile.phoneNumber} onChange={fun1} 
           />
          <button className="btn primary" onClick={fun2}>Send OTP</button>
        </div>

        <div className="input-group">
          <label>Enter OTP:</label>
          <input type="text" placeholder="Enter OTP"
            value={mobileotp.otp} onChange={fun3}
           />
          <button className="btn secondary" onClick={fun4}>Verify OTP</button>
        </div>
      </fieldset>
    </div>
  );
};

export default App;
