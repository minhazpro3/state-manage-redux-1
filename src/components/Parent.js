import React, { useContext, useReducer } from "react";
import { GLOBALSTATE } from "../App";
import Child from "./Child";

const Parent = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Parent</h4>
      <h4>{state}</h4>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      {/* <Child /> */}
    </div>
  );
};

export default Parent;
