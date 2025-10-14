import React from 'react'

const AddToCart = ({cart, SetCart}) => {
  function deletee(id){
    // console.log(id);
  let newArrr=   cart.filter((a,b)=>{
      return  b!==id

    })
    SetCart(newArrr)
  }

  

  return (
    <div>
        {
            cart.map((a,b)=>{
                return (<>
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
  )
}

export default AddToCart