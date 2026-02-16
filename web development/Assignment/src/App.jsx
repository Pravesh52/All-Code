import React, { useEffect, useState } from 'react'

const App = () => {
  let[apiData,SetApiData] =useState([])
  let[input,Setinput]=useState("")
  useEffect(()=>{
    fetch('https://dummyjson.com/products').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      SetApiData(data.products)

    })
  },[])

  const Asc = () => {
    const sorted = [...apiData].sort((a, b) =>
       a.price - b.price)
    SetApiData(sorted)
  }

  const Des =()=>{
      const sorted =[...apiData].sort((a,b)=>
      b.price - a.price )
     SetApiData(sorted)
  }

  const Search=(res)=>{
     if(input.trim==""){
      res.respose("Error")
    }
    SetApiData(Search)
  }

  

  return (
    <div>
      <input
       type="text"
        placeholder="Search product"
        value={input}
        onChange={(e) => SetInput(e.target.value)}

      />

      <button onClick={Asc}>Asc</button>
      <button onClick={Des}>Des</button>

      {
        apiData.map((res)=>{
          return(<>
          <h1>{res.title}</h1>
          <h3>{res.price}</h3>
          </>)
        })
      }
    </div>
  )
}

export default App