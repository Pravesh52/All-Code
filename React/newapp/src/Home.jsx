// import React from 'react'

// const Home = (a) => {
//   return (
//     <div>{a.data}</div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Home = ({cart,SetCart,  apiData,SetData,filteredddData,SetFilteredddData}) => {


      let arr=[1,2,3,4,5]
      let arr1=[6,7,8,...arr]
      console.log(arr1,"rrrr");
      

      







     console.log("heheheheh");
     
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes").then((res)=>{
      return res.json()

    }).then((data)=>{
      console.log(data.recipes);
      SetData(data.recipes)
      SetFilteredddData(data.recipes)
      

    })

  },[])

  function deletee(id){
    // console.log(id);
  let newArrr=   apiData.filter((a,b)=>{
      return  b!==id

    })
    SetData(newArrr)

    
  }
  function fun1(){
   let Data1=  [...apiData].sort((a,b)=>{
      return a.rating-b.rating
      
    })
    console.log(Data1,"SORTEDDDDD");
    
    SetData(Data1)


  }
  function fun2(){
    let Data1=  [...apiData].sort((a,b)=>{
      return b.rating-a.rating
      
    })
    console.log(Data1,"SORTEDDDDD");
    
    SetData(Data1)

  }

  function lunch(searchValue){
   let filtereddData=   apiData.filter((a)=>{
      return a.mealType[0]==searchValue

    })
    SetFilteredddData(filtereddData)

  }

  function dinner(a){
    let filtereddData=   apiData.filter((a)=>{
      return a.mealType[0]==a

    })
    SetFilteredddData(filtereddData)


  }
  return (
      <> 
      <Link  to={'/cart'}>  
       <button>add to Cart {cart.length}</button>
       </Link>
    <div>
     
      <button onClick={fun1}>acs</button>
      <button onClick={fun2}>des</button>
      <button onClick={()=>lunch("Lunch")}>lunch</button>
      <button onClick={()=>dinner("Dinner")}>dinner</button>
      <button>breakfast</button>


      {
        filteredddData.map((a,index)=>{
          return(<>
          <div id='card'>
          <img  src={a.image}/>
            <p>{a.name}</p>
            <p> Rating: {a.rating}</p>
         <button  onClick={()=> SetCart([...cart,a])}>add </button>
           
          </div>
          </>)
        })
      }
    </div>
    </>
  )
}

export default Home
