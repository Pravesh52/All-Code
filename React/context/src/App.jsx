import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextP } from "./Context.jsx";
import Home from "./Home.jsx";
import Cart from "./AddToCart.jsx";

const App = () => {
  return (
    <ContextP>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextP>
  );
};

export default App;
