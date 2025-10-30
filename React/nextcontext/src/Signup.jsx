import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <fieldset>
        <legend>Signup</legend>
        <span>Name: </span>
        <input/>
        <br></br>
        <br></br>
        <span>Mobile No.: </span>
        <input/>
        <br></br>
        <br></br>
        <span>Email id: </span>
        <input/>
        <br></br>
        <br></br>
        <span>Password: </span>
        <input/>
        <br></br>
        <br></br>
        <button>Signup</button>

        <Link to='/login'>
        <button>Go to login</button>
        </Link>

      </fieldset>
    </div>
  )
}

export default Signup