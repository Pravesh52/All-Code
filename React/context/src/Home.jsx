import React, { useContext } from "react";
import Context from "./Context.jsx";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Home = () => {
  let { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div>
      <div className="nav">
        <button onClick={() => navigate("/cart")}>
          Add Cart ({state.cart.length})
        </button>
      </div>

      <section>
        {state.apiData.map((a) => (
          <div id="card" key={a.id}>
            <img src={a.image} alt={a.name} />
            <h3>{a.name}</h3>
            {/* <p>{a.instructions.slice(0, 60)}...</p> */}
            <h5>Rating: {a.rating}⭐</h5>
            <h5>Price: ${(a.id * 5 + 20).toFixed(2)}</h5>
            <button onClick={() => addToCart(a)}>Add to cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
