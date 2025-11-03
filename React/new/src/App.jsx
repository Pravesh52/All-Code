// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"

// const App = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             <li><hr class="dropdown-divider"/></li>
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

// <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img height={"400px"} src="https://plus.unsplash.com/premium_photo-1760995720217-54aef3fa0218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img height={"400px"} src="https://images.unsplash.com/photo-1761839257664-ecba169506c1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img height={"400px"} src="https://images.unsplash.com/photo-1761807446688-d87aea44ecb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

// <br></br>

// <form class="row g-3">
//   <div class="col-md-6">
//     <label for="inputEmail4" class="form-label">Email</label>
//     <input type="email" class="form-control" id="inputEmail4"/>
//   </div>
//   <div class="col-md-6">
//     <label for="inputPassword4" class="form-label">Password</label>
//     <input type="password" class="form-control" id="inputPassword4"/>
//   </div>
//   <div class="col-12">
//     <label for="inputAddress" class="form-label">Address</label>
//     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
//   </div>
//   <div class="col-12">
//     <label for="inputAddress2" class="form-label">Address 2</label>
//     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
//   </div>
//   <div class="col-md-6">
//     <label for="inputCity" class="form-label">City</label>
//     <input type="text" class="form-control" id="inputCity"/>
//   </div>
//   <div class="col-md-4">
//     <label for="inputState" class="form-label">State</label>
//     <select id="inputState" class="form-select">
//       <option selected>Choose...</option>
//       <option>...</option>
//     </select>
//   </div>
//   <div class="col-md-2">
//     <label for="inputZip" class="form-label">Zip</label>
//     <input type="text" class="form-control" id="inputZip"/>
//   </div>
//   <div class="col-12">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck"/>
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <div class="col-12">
//     <button type="submit" class="btn btn-primary">Sign in</button>
//   </div>
// </form>

//     </div>
//   )
// }

// export default App

//Problem
// import React, { useState } from 'react'

// const App = () => {
//   let [data,setdata]=useState(0)
  
//   let res=0
//   for(let i=0;i<100000000;i++)
//   {
//     res+=i;
//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <h3>{res}</h3>
//       <button onClick={()=>setdata(data+1)}>click</button>
//     </div>
//   )
// }

// export default App

//this problem are solution usememo

// import React, { useState,useMemo } from 'react'

// const App = () => {
//   let [data,setdata]=useState(0)
  
//   let res=useMemo(()=>{
//     let res=0
//     for(let i=0;i<1000000000;i++)
//     {
//       res+=i;
//     }
//     return res;
//   },[]);
//   return (
//     <div>
//       <h2>{data}</h2>
//       <h3>{res}</h3>
//       <button onClick={()=>setdata(data+1)}>click</button>
//     </div>
//   )
// }

// export default App

// Problem 
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [input,Setinput]=useState("")
//    let [data,Setdata]=useState()
//    useEffect(()=>{
//     Setdata(data+1)
//    })
//   return (
//     <div>
//       <h1>{data}</h1>
//       <input type='text' onChange={(e)=>Setinput(e.target.value)} />
//     </div>
//   )
// }

// export default App

//solution of this problem using useRef
import React, { memo, useEffect, useRef, useState } from 'react'

const App = () => {
  let [input,Setinput]=useState("")
  

  let count=useRef(0)
   useEffect(()=>{
    count.current+=1
   })
  return (
    <div>
      <h1>{count.current}</h1>
      <input type='text' onChange={(e)=>Setinput(e.target.value)} />
     <Home/>
    </div>
  )
}

const Home= memo(()=>{
  console.log("hello")
  return(
    <div>Home file</div>
  )
})

export default App
