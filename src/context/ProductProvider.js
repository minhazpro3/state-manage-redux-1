import React, { createContext, useContext, useEffect, useReducer } from "react";
import { products_action_Types } from "../products_state/action_types";
import {
  initial_product_state,
  productReducer,
} from "../products_state/product_reducer";
export const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initial_product_state);
  const value = { state, dispatch };
  console.log(state);
  useEffect(() => {
    dispatch({ type: products_action_Types.FETCHING_START });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) =>
        dispatch({ type: products_action_Types.FETCHING_SUCCESS, payload: res })
      )
      .catch(() => {
        dispatch({ type: products_action_Types.FETCHING_ERROR });
      });
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
