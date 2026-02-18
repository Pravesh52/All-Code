import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [input, setInput] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
        setAllProducts(data.products);
      });
  }, []);

  //  Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Ascending
  const Asc = () => {
    const sorted = [...apiData].sort((a, b) => a.price - b.price);
    setApiData(sorted);
  };

  //  Descending
  const Des = () => {
    const sorted = [...apiData].sort((a, b) => b.price - a.price);
    setApiData(sorted);
  };

//search
  const Search = () => {
    if (input.trim() === "") {
      alert("Please enter something");
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );

    setApiData(filtered);
  };


  const Reset = () => {
    setApiData(allProducts);
    setInput("");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">

              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search product"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={Search}>Search</button>
                <button onClick={Reset}>Reset</button>
                <button onClick={Asc}>Asc</button>
                <button onClick={Des}>Des</button>
              </div>

              {apiData.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>₹{product.price}</p>
                  <p>{product.brand}</p>

                  <button onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          }
        />

        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
};

export default App;
