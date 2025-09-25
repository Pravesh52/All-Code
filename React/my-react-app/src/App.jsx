
//Day 1
// DATE- 22-08-25

//import { useState } from "react"

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

// import React from 'react'

// const App = () => {
//   let count = 1
//   function fun1(){
//     count+=1
//   }
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={fun1}>click</button>
//     </div>

//   )
// }

// export default App


//Day2
// DATE: 23-08-25

// import React, { useState } from 'react'

// const App = () => {
//    let[state,Setstate]=useState(0)
//   function fun1(){
//     Setstate(state+1)
//   }
//   return (
//     <div style={{backgroundColor:"red"}}>
//       <h2>{state}</h2>
//       <button onClick={fun1}>click</button>
//     </div>

//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//    let[state,Setstate]=useState("red")
//   function fun1(){
//     Setstate("green")
//     if(state=='red'){
//       Setstate("gold")
//     }else{
//       Setstate("red")
//     }
//   }
//   return (
//     <div style={{backgroundColor:state,width:"100vw",height:"100vh",display:'flex',justifyContent:'center',alignItems:"center"}}>
//       <button onClick={fun1}>click</button>
//       <h2>{state}</h2>
//     </div>

//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {
  //  let[state,Setstate]=useState(0)
  // function fun1(){
  //   Setstate(state+1)
  // }
  // function fun2(){
  //   Setstate(state-1)
  // }
  // function fun3(){
  //   Setstate(0)
  // }
// let [count,SetCount]=useState(new Date().toLocaleTimeString())
//  setInterval(() => {
//   SetCount(new Date().toLocaleTimeString())
//  }, 1000);

//   //let date=new Date().toLocaleTimeString()
//   return (
//     <div>

//       <h3>{count}</h3>
//       {/* <h2>{state}</h2>
//       <button onClick={fun1}>++</button>
  
//       <button onClick={fun2}>--</button>

//       <button onClick={fun3}>reset</button> */}
    

//     </div>

   

//   )
// }

// export default App


// import React, { useState, useEffect, useRef } from "react";

// function App() {
//   const [count, setCount] = useState(new Date().toLocaleTimeString());
//   const intervalRef = useRef(null); 

  
//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(intervalRef.current); // cleanup
//   }, []);

//   const startTimer = () => {
//     intervalRef.current = setInterval(() => {
//       setCount(new Date().toLocaleTimeString());
//     }, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(intervalRef.current);
//   };

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={startTimer}>Start</button>
//     </div>
//   );
// }

// export default App;

//Day 3
// import { useEffect, useState } from "react"
// const App=()=>{
//   let[count,SetCount]=useState(0)
//   let[city,SetCity]=useState(['REWA'])
//   useEffect(()=>{
//     console.log("hello");
//   },[count])
//   return (
//   <div>
//    <h2>{count}</h2>
//     <button onClick={()=>SetCount(count+1)}>click</button>
//     <h3>{city}</h3>
//     <button onClick={()=>SetCity(["Delhi","Bhopal"])}>change</button>
//   </div>)
// }

// export default App


// import { useEffect, useState } from "react"
// import  './App.css'
// const App=()=>{
//   let[ApiData,SetApiData]=useState([])
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data);
//       SetApiData(data)
//     })
//   },[])
  
//   return (
//   <div>
//    {
//     ApiData.map((a)=>{
//       return(<>
//       <p>{a.id}</p>
//       <h2>{a.title}</h2>
//       </>)
//     })
//    }
//   </div>)
// }

// export default App


//Day4

import React, { useEffect, useState } from 'react'
import  './App.css'
const App = () => {
  let[ApiData,SetData]=useState([])

  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
    })
  },[])
  
  const Delete = (id) => {
    const newData = ApiData.filter((item) => item.id !== id)
    SetData(newData)
  }

  return (
    <div>
      {
        ApiData.map((a)=>{
          return(<>
          <div id='card'>
            <img src={a.image}/>
            <p>{a.name}</p>
             <button onClick={() => Delete(a.id)}>Delete</button>

          </div>
          </>)
        })
      }
    </div>
    
  )
}

export default App