import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  initial_product_state,
  productReducer,
} from "../products_state/product_reducer";
export const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const value = { data };

  const [state, dispatch] = useReducer(productReducer, initial_product_state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
