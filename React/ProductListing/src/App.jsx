// import React from 'react'

import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  let [ApiData, SetData] = useState([])
  // let [search, setSearch] = useState("")
  //  let [filteredddData,SetFilteredddData]=     useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        SetData(data.products)
       
      })
  }, [])

  function fun1(e){
    SetData=e.target.value
  }

  function search(){
    
  }



  return (
   
    <div>
      <div id="Search">
        <input type="text" onclick="" placeholder='Search the product' />
        <button onclick="">Search</button>
      </div>

      {
        
        ApiData.map((a)=>{
          return (
            <div id="card">
            <h3>{a.title}</h3>
            <p>{a.brand}</p>
            <p>{a.description}</p>
            <h4>{a.price}</h4>
            </div>
          )
  
        })

      }
    </div>
  )
}

export default App