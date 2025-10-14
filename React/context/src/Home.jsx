import React, { useContext } from 'react'
import Context from './Context.jsx';
const Home = () => {
    let data = useContext(Context);
  return (
    <div>{data}</div>
  )
}

export default Home