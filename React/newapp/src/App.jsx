//import React from 'react'
// import { useReducer } from 'react'

// const App = () => {
//   let[count,dispatch]=useReducer(reducer,0)
//   function reducer (count,action){
//       if(action.type=='inc'){
//         return count+1
//       }else if(action.type=='dec'){
//         return count-1
//       }else if(action.type=='rec')
//       {
//         return 0
//       }else{
//         return count
//       }
//     }
    
//   return (
    
//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=> dispatch({type:'inc'})}>++</button>
//       <button onClick={()=> dispatch({type:'dec'})}>--</button>
//       <button onClick={()=> dispatch({type:'rec'})}>Reset</button>

//     </div>
//   )
// }

// export default App

// import React from 'react'

// import Home from './Home'
// const App = () => {
//   let user="Pravesh"
//   return (
//     <div>
//       <Home data={user}/>
//     </div>
//   )
// }

// export default App

import React ,{useState}from 'react'
import Home from './Home'

import { Route, Routes } from 'react-router-dom'
import AddToCart from './AddToCart'

const App = () => {
  let [apiData,SetData]=     useState([])
  let [filteredddData,SetFilteredddData]=     useState([])

    let [cart,SetCart]=    useState([])
    console.log(cart,"h=dekhooooo");
    
  return (
    <div>
      
      <Routes>
        <Route   path='/'  element={<Home cart={cart} SetCart={SetCart}   apiData={apiData} SetData={SetData} filteredddData={filteredddData}    SetFilteredddData={SetFilteredddData}  />} />
        
        <Route   path='/cart'  element={<AddToCart cart={cart}/>} />


      </Routes>
    </div>
  )
}

export default App