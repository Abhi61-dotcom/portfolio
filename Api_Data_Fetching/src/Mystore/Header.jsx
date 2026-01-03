import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export const Header = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#4d7b56",
        color: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        // width:"100vh",
        minWidth:"200px"
      }}
    >
      <h1
        style={{ margin: 0, cursor: "pointer", fontSize:"35px"}}
        onClick={() => navigate("/")}
      >
        🛍️ My Store
      </h1>

      <div
        style={{ cursor: "pointer", position: "relative",fontSize:"35px" }}
        onClick={() => navigate("/cart")}
      >
        🛒
        {cart.length > 0 && (
          <sup
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px",
            }}
          >
            {cart.length}
          </sup>
        )}
      </div>
    </div>
  );
};
