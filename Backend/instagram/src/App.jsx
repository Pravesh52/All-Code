import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Clone from './Clone'
import Signup from './Signup'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
import Reset from './Reset'
import Home from './Home'
import { Upload } from 'lucide-react'
import Profile from './Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Clone/>}></Route>
        <Route path='/Home'element={<Home/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/forgetPassword' element={<ForgetPassword/>}></Route>
         {/* <Route path='/reset-password' element={<Reset/>}></Route> */}
         <Route path="/reset/:token" element={<Reset />} />
         {/* <Route path="/upload" element={<UploadPhoto/>}></Route> */}
         <Route path="/profile"element={<Profile/>}></Route>
          
      </Routes>
    </div>
  )
}

export default App