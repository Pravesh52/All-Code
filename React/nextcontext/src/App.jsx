// // import React, { useState } from 'react'

// // const App = () => {
// //   let [input,Setinput]= useState('')
// //   let [data,Setdata]= useState([])
// //   function fun1(e){
// //     Setinput(e.target.value)
// //   }
// //   function btn(){
// //     if(input == ""){
// //       return
// //     }
// //     Setdata([...data,input])
// //   }
// //   function deletee(id){
// //     Setdata(data.filter((a,b)=>{
// //       return b != id;

// //     }))
// //   }
// //   return (
// //     <div>
// //       <input onChange={fun1} />
// //       <button onClick={btn}>add</button>
// //       {
// //       data.map((a,b)=>{
// //         return (<>

// //         <li>{a}</li>
// //         <button onClick={()=>deletee(b)}>Delete</button>
        
// //         </>)
// //       })
// //     }
// //     </div>
// //   )
// // }

// // export default App


// import React from 'react'
// import { useReducer, useState } from 'react'
// import Home from './Home'
// import Cart from './Cart'
// import {Routes, Route} from 'react-router-dom'
// import ProductDetails from './ProductDetails'

// const App = () => {
//   // let [apiData, setApiData] = useState([])
//   // let [filterData, setFilterData] = useState([])
//   // let [cart, setCart] = useState([])
//   // let [itemsInCart, setItemsInCart] = useState(0);
//   // let user = 'Ankit';
//   // let obj = {
//   //   cnt:0,
//   //   color:'red'
//   // }
//   // function reducer(count, action){
//   //   if(action.type == 'inc'){
//   //     console.log(count);
//   //     return {cnt:count.cnt + 1, color:'orange'};
//   //   }
//   //   else if(action.type == 'dec'){
//   //     return {cnt:count.cnt - 1, color:'green'};
//   //   }
//   //   else if(action.type == 'reset'){
//   //     return {cnt:0, color:'red'};
//   //   }
//   //   else{
//   //     return obj;
//   //   }
//   // }
//   // let [count, dispatch] = useReducer(reducer, obj);
//   return (
//     <>
//     {/* <h2 style={{color:count.color}}>{count.cnt}</h2>
//     <button onClick={()=>dispatch({type:'inc'})}>++</button>
//     <button onClick={()=>dispatch({type:'dec'})}>--</button>
//     <button onClick={()=>dispatch({type:'reset'})}>Reset</button> */}
//     {/* <Home data={user}></Home> */}
//     <Routes>
//       <Route path='/' element={<Home></Home>}/>
//       <Route path='/cart' element={<Cart></Cart>}/>
//       <Route path='/productpage/:id' element={<ProductDetails></ProductDetails>}></Route>
//     </Routes>
//     {/* <Home></Home> */}
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
     //let [count,Setcount]= useState(0)
   let [count, setCount] = useState(0);
  //  let timerRef = useRef(null);
  // let [color,Setcolor]= useState("white")
   let [timer,Settimer]=useState(0)
  // function fun1(){

  //   Setcount(count+1)

  // }
  // function fun2(){
  //   if(color=="white")
  //   {
  //     Setcolor("red")
  //   }else if(color=="red")
  //   {
  //     Setcolor("blue")
  //   }
  //   else{
  //     Setcolor('white')
  //   }
  // }


function start() {
  if (!timer) {
    timer = setInterval(() => {
      setCount(count+1);
      console.log("Count:", count);
    }, 1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

  return (
    <div>
      
      {/* <h1>{count}</h1>
      <button onClick={fun1}>Btn</button>

      <button onClick={fun2}>btn background</button> */}
       <h1>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
    </div>
  )
}

export default App