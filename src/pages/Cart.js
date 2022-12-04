import React, { useContext } from "react";

const Cart = ({ x }) => {
  return (
    <div
      style={{
        border: "2px solid green",
        margin: "2px 2px",
        width: "25rem",
        padding: "0.5rem",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>
            {" "}
            User Name: <span style={{ color: "green" }}>{x?.username}</span>
          </h5>
          <h5>
            {" "}
            E-mail: <span style={{ color: "green" }}>{x?.name}</span>
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h5>
            {" "}
            Street: <span style={{ color: "green" }}>{x?.address?.street}</span>
          </h5>
          <h5>
            {" "}
            Phone: <span style={{ color: "green" }}>{x?.phone}</span>
          </h5>
        </div>
        <h5>
          {" "}
          City: <span style={{ color: "green" }}>{x?.address?.city}</span>
        </h5>
      </div>
    </div>
  );
};

export default Cart;
