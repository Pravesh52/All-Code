import React, { useContext } from "react";
import Context from "./Context.jsx";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Cart = () => {
  const { state } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <h2>Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        state.cart.map((item) => (
          <div id="card" key={item.id}>
            <img src={item.image} alt={item.name}/>
            <h3>{item.name}</h3>
            <h3>Rating: {item.rating}⭐</h3>
          <h5>Price: ${(item.id * 5 + 20).toFixed(2)}</h5>
            {/* <p>{item.instructions.slice(0, 60)}...</p> */}
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
