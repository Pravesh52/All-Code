//rafce
import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Link  to={'/signup'} >  
        <button>Signup</button>
      </Link>
        <br></br>
        <br></br>
     <Link  to={'/Login'} >  
        <button>Login</button>
     </Link>
    </div>
  )
}

export default Home