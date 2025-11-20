import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Clone from './Clone'
import Signup from './Signup'
import Login from './Login'
import ForgetPassword from './ForgetPassword'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Clone/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
          <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
          
      </Routes>
    </div>
  )
}

export default App