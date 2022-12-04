import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
  const { data } = useProducts();
  console.log(data);
  return <div>Home</div>;
};

export default Home;
