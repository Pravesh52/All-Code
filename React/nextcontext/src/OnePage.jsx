import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from './Context';

const OnePage = () => {
    let [showData, setShowData] = useState([]);
    let {id} = useParams();
    let {state} = useContext(Context);
    let data = state.apiData.find((a, b)=>{
        return b == id;
    })
    setShowData(data);
  return (
    <div>
        {
            <h2>{showData.name}</h2>
        }
    </div>
  )
}

export default OnePage