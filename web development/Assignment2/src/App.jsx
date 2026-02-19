import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [apiData, setapiData] =useState([]);
  const [alluser,setalluser]=useState([])
  const [input, setinput]=useState("")
  useEffect(()=>{
    fetch("https://dummyjson.com/users")
    .then((res)=> res.json())
    .then((data)=>{
       console.log(data);
       setapiData(data.users)
       setalluser(data.users)
      
    })


  },[])

  const search=()=>{
       if (input.trim() === "") {
      alert("Kuch pahle input lo");
      return;
    }

    const filtered = alluser.filter((users) =>
    users.firstName.toLowerCase().includes(input.toLowerCase())
    );
     setapiData(filtered);
  }

  const asc = ()=>{
    const sorted = [...apiData].sort((a,b)=> a.age-b.age)
    setapiData(sorted)
  }

  const des = ()=>{
    const sorted = [...apiData].sort((a,b)=> b.age-a.age)
    setapiData(sorted)
  }

 const sortnameAsc = () => {
  const sorted = [...apiData].sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  )
  setapiData(sorted);
}

const sortnameDsc = () =>{
  const sorted =[...apiData].sort((a,b)=>
    b.firstName.localeCompare(a.firstName)
  )
   setapiData(sorted);
}



  
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={search}>Search</button>

      {/* Sort */}
     <button onClick={asc}>Low to High</button>
     <button onClick={des}>High to Low</button>
     <button onClick={sortnameAsc}>Name Se sort asc</button>
     <button onClick={sortnameDsc}>Name Se sort Dsc</button>



      {
        
        apiData.map((users)=>(
          <div key={users.id}>
            <h3>Name: {users.firstName} {users.lastName} </h3>
            <p>Eamil: {users.email}</p>
            <p>Age: {users.age}</p>
            <p>Phone: {users.phone}</p>
            {/* <p>Company Name: {users.company}</p> */}
          </div>
        ))
      }
    </div>
  )
}

export default App