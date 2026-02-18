import React from "react";

const Cart = ({ cart }) => {

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <p>cart khali hai</p>
      </div>
    );
  }


  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {
        cart.map((item, index) => (
        <div key={index} className="cart-item">
        <img src={item.thumbnail} />
          <h4>{item.title}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}

      
    </div>
  );
};

export default Cart;
