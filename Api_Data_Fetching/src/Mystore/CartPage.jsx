import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { Header } from "./Header";

export const CartPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Har product ke liye count rakhega
  const [counts, setCounts] = useState(
    cart.map(() => 1) // default 1 quantity
  );

  if (cart.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#EAF6EB",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        {/* Back Button */}
        <button
          style={{
            position: "absolute",
            top: "100px",
            left: "20px",
            backgroundColor: "#4D7B56",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Back
        </button>

        {/*  Empty Message */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#4D7B56",
              fontSize: "28px",
              textAlign: "center",
            }}
          >
            Your cart is empty 😢
          </h2>
          <div>
            <button
              style={{
                // position: "absolute",
                // top: "100px",
                // left: "20px",
                marginTop:"50px",
                backgroundColor: "#4D7B56",
                color: "white",
                border: "none",
                padding: "10px 18px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/");
              }}
              onMouseEnter={(e)=> (e.target.style.backgroundColor="#1b4332")}
              onMouseLeave={(e)=> (e.target.style.backgroundColor="#2d6a4f")}
            >
              {" "}
              Add Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quantity update function
  const updateCount = (index, value) => {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] = Math.max(1, newCounts[index] + value); // kam se kam 1
      return newCounts;
    });
  };

  return (
    <div
      style={{
        // padding: "20px",
        background: "#EBECEE",
        color: "black",
        minHeight: "100vh",
        borderRadius: "3px",
      }}
    >
      <Header />
      <div>
        <button
          style={{
            position: "absolute",
            top: "100px",
            left: "20px",
            backgroundColor: "#4D7B56",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "50px",
          paddingBottom: "20px",
        }}
      >
        {cart.map((product, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "15px",
              width: "90%",
              maxWidth: "800px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            {/* right side content */}
            <div style={{ flex: 1, textAlign: "left" }}>
              <h3
                style={{
                  color: "#4d7b56",
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                {product.title}
              </h3>

              <p
                style={{
                  fontWeight: "bold",
                  color: "#d32f2f",
                  marginBottom: "10px",
                }}
              >
                ${product.price}
              </p>

              {/* Quantity buttons */}
                <div style={{display:"flex" , justifyContent:"space-between"}}>
                <div>                <button
                  style={{
                    padding: "5px 10px",
                    margin: "0 5px",
                    backgroundColor: "#4d7b56",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => updateCount(index, 1)}
                >
                  +
                </button>
                {counts[index]}
                <button
                  style={{
                    padding: "5px 10px",
                    margin: "0 5px",
                    backgroundColor: "#d32f2f",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => updateCount(index, -1)}
                >
                  -
                </button></div>
                <div>
                  <button style={{backgroundColor:"#fd4040ea",color:"white"}} 
                  onMouseEnter={(e)=>{(e.target.style.backgroundColor="red")}}
                  onMouseLeave={(e)=>{(e.target.style.backgroundColor="#fd4040ea")}}>Remove item</button>
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
