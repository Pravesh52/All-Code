

// const App=()=>{
//   return (
//   <div>
//     <h2>Login</h2>
//   {/* <h1>Hello React</h1> */}
//   <form>
//     <span>Enter Username : </span>
//     <input type="text" />
//     <br />
//     <br />
//     <span>Password : </span>
//     <input type="password"></input>
//     <br />
//     <br />
//     <span>DATE OF Birth: </span>
//     <input type="date" />
//     <br />
//     <br />

//     <button>Click</button>
//   </form>
//   </div>)
// }

// export default App

import React from 'react'

const App = () => {
  let count = 1
  function fun1(){
    count+=1
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={fun1}>click</button>
    </div>

  )
}

export default App