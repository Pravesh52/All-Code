import React, { useState } from 'react'

const App = () => {
  let [input,Setinput]= useState('')
  let [data,Setdata]= useState([])
  function fun1(e){
    Setinput(e.target.value)
  }
  function btn(){
    if(input == ""){
      return
    }
    Setdata([...data,input])
  }
  function deletee(id){
    Setdata(data.filter((a,b)=>{
      return b != id;

    }))
  }
  return (
    <div>
      <input onChange={fun1} />
      <button onClick={btn}>add</button>
      {
      data.map((a,b)=>{
        return (<>

        <li>{a}</li>
        <button onClick={()=>deletee(b)}>Delete</button>
        
        </>)
      })
    }
    </div>
  )
}

export default App