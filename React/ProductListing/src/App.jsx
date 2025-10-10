import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  let [apiData, setApiData] = useState([])
  let [apiData2, setApiData2] = useState([])
  let [searchData, setSearchData] = useState("")
  // let [searchApi, setSearchApi] = useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            setApiData(data.products);
            setApiData2(data.products);
        })
    },[])
    // useEffect(()=>{
    //     fetch("https://dummyjson.com/products/search?q=phone").then((res)=>{
    //         return res.json();
    //     }).then((data)=>{
    //         console.log(data);
    //         setSearchApi(data)
    //     })
    // },[])
    function fun1(e){
      setSearchData(e.target.value);
      // console.log(searchData);
    }
    function search(){
      if(searchData == ""){
        alert("Empty Search Box")
        return;
      }
      setApiData2(apiData.filter((a)=>{
        return a.title.includes(searchData);
      }))
    }
    function sortData(x){
      if(x == 1){
        setApiData2([...apiData].sort((a, b)=>{
          return a.price - b.price;
        }))
      }
      else if(x == 2){
        setApiData2([...apiData].sort((a, b)=>{
          return b.price - a.price;
        }))
      }
      else if(x == 3){
        setApiData2([...apiData].sort((a, b)=>{
          return a.rating - b.rating;
        }))
      }
      else if(x == 4){
        setApiData2([...apiData].sort((a, b)=>{
          return b.rating - a.rating;
        }))
      }
    }
  return (
    <>
      <div className="nav">
        <div className='navIcons'>
          <h4>Sort By Price</h4>
          <button onClick={()=>sortData(1)}>🔼</button>
          <button onClick={()=>sortData(2)}>🔽</button>
        </div>
        <div className='navIcons'>
          <input type="text" id='searchInput' onChange={fun1} placeholder='Search For Items'/>
          <button id='searchBtn' onClick={search}>Click To Search</button>
        </div>
        <div className='navIcons'>
          <h4>Sort By Rating</h4>
          <button onClick={()=>sortData(3)}>🔼</button>
          <button onClick={()=>sortData(4)}>🔽</button>
        </div>
      </div>
      <br />
      <section>
        {
          apiData2.map((a)=>{
            return (
              <div id='card'>
                <img src={a.images[0]} alt="" />
                <h3>{a.title}</h3>
                <h4>Brand: {a.brand}</h4>
                <h4>Description:</h4>
                <p>{a.description}</p>
                <p>Category: {a.category}</p>
                <h4>Rating: {a.rating}⭐</h4>
                <h4>Stock: {a.stock}</h4>
                <h5>Price: ${a.price}</h5>
              </div>
            )
          })
        }
      </section>
    </>
  )
}

export default App