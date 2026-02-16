import React, { useEffect, useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState([]);       
  const [allProducts, setAllProducts] = useState([]); 
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.products);
        setAllProducts(data.products); 
      });
  }, []);

  const Asc = () => {
    const sorted = [...apiData].sort((a, b) => a.price - b.price);
    setApiData(sorted);
  };


  const Des = () => {
    const sorted = [...apiData].sort((a, b) => b.price - a.price);
    setApiData(sorted);
  };


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
    <div style={{ padding: "20px" }}>
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

      {apiData.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
