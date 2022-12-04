import React from "react";
import { useProducts } from "../context/ProductProvider";
import Cart from "./Cart";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();
  console.log(products);

  let content;
  if (loading) {
    content = <p>loading..</p>;
  } else if (error) {
    content = <p>something went wrong</p>;
  } else if (!loading && !error && products.length === 0) {
    content = <p>product list is empty!</p>;
  } else if (!loading && !error && products.length) {
    content = products.map((x) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Cart key={x.id} x={x} />
      </div>
    ));
  }

  return <div>{content}</div>;
};

export default Home;
