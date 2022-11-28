import React, { useContext } from "react";
import { GLOBALSTATE } from "../App";

const Child = () => {
  const { count, setCount } = useContext(GLOBALSTATE);
  return (
    <div style={{ marginTop: "23px" }}>
      <h4>Child</h4>
      <h4>{count}</h4>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount((prvState) => prvState + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Child;
