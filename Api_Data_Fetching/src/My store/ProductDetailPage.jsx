import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { CartContext } from "./CartContext";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((detail) => setProductDetail(detail))
      .catch((err) => console.error(err));
  }, [id]);

  if (!productDetail) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px", color: "#2d6a4f" }}>
        Loading product details... ⏳
      </h2>
    );
  }

  return (
    <>
      {/* ✅ Header */}
      <Header />

      {/* ✅ Product Detail Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F0F9F0",
          minHeight: "100vh",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            backgroundColor: "",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.1)",
            maxWidth: "1200px",
            width: "100%",
            maxHeight:"700px",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            
          }}
        >
          {/*Back Button */}
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "#4D7B56",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              marginBottom: "25px",
              position:"relative",
              left:"-500px"
            }}
            // onMouseEnter={(e) => (e.target.style.backgroundColor = "#bbb")}
            // onMouseLeave={(e) => (e.target.style.backgroundColor = "#ccc")}
          >
            ⬅ Back
          </button>

          {/* 🏷️ Product Title */}
          <h1
            style={{
              color: "#2d6a4f",
              fontSize: "clamp(22px, 3vw, 36px)",
              marginBottom: "25px",
            }}
          >
            {productDetail.title}
          </h1>

          {/* 🖼️ Image + Description */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            <img
              src={productDetail.thumbnail}
              alt={productDetail.title}
              style={{
                width: "320px",
                height: "300px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                objectFit: "cover",
              }}
            />

            <p
              style={{
                backgroundColor: "#f1f3f5",
                padding: "20px",
                borderRadius: "10px",
                color: "#495057",
                fontSize: "clamp(14px, 1.8vw, 18px)",
                lineHeight: "1.6",
                fontStyle: "italic",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
                maxWidth: "500px",
                textAlign: "center",
              }}
            >
              {productDetail.description}
            </p>
          </div>

          {/* 💰 Price */}
          <p
            style={{
              fontWeight: "bold",
              fontSize: "clamp(18px, 2vw, 24px)",
              color: "#1b4332",
              marginBottom: "25px",
            }}
          >
            Price: ₹{productDetail.price}
          </p>

          {/* 🛒 Add To Cart Button */}
          <button
            style={{
              backgroundColor: "#2d6a4f",
              color: "white",
              border: "none",
              padding: "14px 30px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "0.3s",
            }}
            onClick={() => addToCart(productDetail)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1b4332")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2d6a4f")}
          >
            🛍️ Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
