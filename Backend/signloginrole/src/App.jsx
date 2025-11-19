import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import Forget from './forget'
import Reset from './reset'
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
          <Route path='/forget' element={<Forget/>}></Route>
          <Route path='/reset/:token' element={<Reset/>}></Route>
      </Routes>
    </div>
  )
}

export default App