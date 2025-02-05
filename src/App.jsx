import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Shop from "./shop";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link
            to="/"
            style={{
              color: "red",
              fontSize: " 2rem",
              background: "black",
              borderRadius: "10px",
            }}
          >
            Shop
          </Link>{" "}
          |{" "}
          <Link
            to="/cart"
            style={{
              color: "yellow",
              fontSize: " 2rem",
              background: "black",
              borderRadius: "10px",
            }}
          >
            Cart 🛒
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
