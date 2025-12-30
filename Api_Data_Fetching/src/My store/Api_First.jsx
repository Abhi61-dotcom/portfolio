import React, { useEffect, useState } from "react";
import "./Api.css";
import ProductPage from "./ProductPage";
import { Header } from "./Header"; // add this line

export const Api_First = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true); //  loading state

  useEffect(() => {
    const url = "https://dummyjson.com/products?limit=194";
    setLoading(true); //  start loading
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false); //  stop loading when data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // stop loading even if error
      });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  let PAGE_SIZE = 10;
  let noofPage = Math.ceil(products.length / PAGE_SIZE);
  let start = current * PAGE_SIZE;
  let end = start + PAGE_SIZE;

  const goToPage = (page) => {
    setCurrent(page);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #e8f5e9, #ffffff)",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      {/* ✅ Loading Message */}
      {loading ? (
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            color: "#4d7b56",
            display: "flex",
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh",
            width: "100%",
          }}
        >
          Loading products... ⏳
        </h2>
      ) : (
        <>
          {/* Page buttons */}
          <div style={{ textAlign: "center", padding: "10px" }}>
            {[...Array(noofPage).keys()].map((n) => {
              return (
                <button
                  type="button"
                  style={{
                    margin: "5px",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #4d7b56",
                    background: current === n ? "#4d7b56" : "#fff",
                    color: current === n ? "#fff" : "#4d7b56",
                    cursor: "pointer",
                  }}
                  key={n}
                  onClick={() => goToPage(n)}
                >
                  {n + 1}
                </button>
              );
            })}
          </div>

          {/* Products */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              paddingLeft: "200px",
              paddingRight: "200px",
            }}
          >
            {products.slice(start, end).map((el) => {
              return (
                <ProductPage
                  key={el.id}
                  id={el.id}
                  thumbnail={el.thumbnail}
                  title={el.title}
                  description={el.description}
                   price={el.price}
                />
              );
            })}
          </div>

          {/* Next Button only after data load */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: current === noofPage - 1 ? "#ccc" : "#4d7b56",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: current === noofPage - 1 ? "not-allowed" : "pointer",
                fontSize: "16px",
                marginTop:"20PX"
              }}
              onClick={() => {
                if (current < noofPage - 1) {
                  goToPage(current + 1);
                }
              }}
              disabled={current === noofPage - 1}
            >
              Next ➡
            </button>
          </div>
        </>
      )}
    </div>
  );
};
