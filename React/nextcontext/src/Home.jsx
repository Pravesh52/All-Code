// import React, { useContext, useEffect, useState } from 'react'
// import {Link, useNavigate} from 'react-router-dom'
// import './Home.css'
// import Context from './Context.jsx';
// // import Cart from './Cart.jsx'

// const Home = () => {
//     // let [apiData, setApiData] = useState([])
//     // let [filterData, setFilterData] = useState([])
//     // useEffect(()=>{
//     //     fetch("https://dummyjson.com/recipes").then((res)=>{
//     //         return res.json();
//     //     }).then((data)=>{
//     //         console.log(data.recipes);
//     //         setApiData(data.recipes);
//     //         setFilterData(data.recipes);
//     //     })
//     // },[])
//     // function del(id){
//     //     let x = apiData.filter((a,b)=>{
//     //         return b !== id;
//     //     })
//     //     setFilterData(x);
//     // }
//     // function save(id){
//     //     let x = apiData.find((a, b)=>{
//     //         return b == id;
//     //     })
//     //     localStorage.setItem("img", JSON.stringify(x));
//     // }
//     // function sort(x){
//     //     if(x == 's'){
//     //         let data = apiData.filter((a, b)=>{
//     //             return a.mealType[0] == "Snack";
//     //         })
//     //         setFilterData(data);
//     //     }
//     //     else if(x == 'l'){
//     //         let data = apiData.filter((a, b)=>{
//     //             return a.mealType[0] == "Lunch";
//     //         })
//     //         setFilterData(data);;
//     //     }
//     //     else if(x == 'd'){
//     //         let data = apiData.filter((a, b)=>{
//     //             return a.mealType[0] == "Dinner";
//     //         })
//     //         setFilterData(data);
//     //     }
//     // }
//     // Sorting logic
//     // let arr = [1,2,5,6,9,2,3,4,5];
//     // let data = arr.sort((a,b)=>{
//     //     return a - b; //Ascending Order Sorting
//     //     // return b - a; //Descending Order Sorting
//     // })
//     // console.log(data);

//     // function asc(){
//     //     let data = [...apiData].sort((a,b)=>{
//     //         return a.rating - b.rating;
//     //     })
//     //     setFilterData(data);
//     // }
//     // function dec(){
//     //     let data = [...apiData].sort((a,b)=>{
//     //         return b.rating - a.rating;
//     //     })
//     //     setFilterData(data);
//     // }
//     // function addToCart(a){
//     //     let x = cart.find((y)=>{
//     //         if(y.userId == a.userId){
//     //             y.quantity++;
//     //             return true;
//     //         }
//     //         return false;
//     //     })
//     //     if(!x){
//     //         let z = a;
//     //         z['quantity'] = 1;
//     //         setCart([...cart,z])
//     //     }
//     //     setItemsInCart(itemsInCart+1);
//     // }
//     let {state, dispatch} = useContext(Context);

//     let navigate = useNavigate();

//     function productPage(id){
//         navigate(/productpage/${id});
//     }
//   return (
//     <>
//     <div className="nav">
//         {/* Also filter based on ratings */}
//         <Link to={'/cart'}>
//             <button>Show Cart</button>
//         </Link>
//         {/* <button onClick={asc}>ASC</button>
//         <button onClick={dec}>DEC</button> */}
//         <button onClick={()=>sort('s')}>Snack</button>
//         <button onClick={()=>sort('l')}>Lunch</button>
//         <button onClick={()=>sort('d')}>Dinner</button>
//         {/* <h2>{data}</h2> */}
//     </div>
//     <section className='all'>
//     {
//         state.apiData.map((a, b)=>{
//             return(
//                 <>
//                 <div id='card'>
//                     <img src={a.image} onClick={()=>productPage(b)}/>
//                     <p>{a.name}</p>
//                     <p>Rating: {a.rating}</p>
//                     <div className="btns">
//                         <button onClick={()=>del(b)}>Delete</button>
//                         <button onClick={()=>save(b)}>Save</button>
//                         <button onClick={()=>{dispatch({type:"ADD_TO_CART",payload:a})}}>Add To Cart</button>
//                     </div>
//                 </div>
//                 </>
//             )
//         })
//     }
//     </section>
//     </>
//   )
// }

// export default Home

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home