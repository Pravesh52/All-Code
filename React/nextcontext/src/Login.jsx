import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <fieldset>
            <legend>Login form</legend>
            <span>Username: </span>
            <input type='email'/>
            <br></br>
            <br></br>
            <span>Password: </span>
            <input type='password'></input>
            <br></br>
            <br></br>
            <button>Login</button>
            <br></br>
            <Link to={'/signup'}>
             <button >Go to signup page</button>
            </Link>
            

        </fieldset>
    </div>
  )
}

export default Login