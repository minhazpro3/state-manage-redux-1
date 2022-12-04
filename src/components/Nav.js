import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div style={{ display: "inline-flex", gap: "23px", margin: "23px" }}>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="top-rated">Top rated</Link>
      <Link to="cart">Cart</Link>
    </div>
  );
};

export default Nav;
