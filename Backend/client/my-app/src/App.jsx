import React from 'react'
import Signup from './Signup'
import login from './login'
import {  Routes, Route } from "react-router-dom";
import Login from './login';

const App = () => {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
     
       
    </div>
  )
}

export default App