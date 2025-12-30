import { useNavigate } from "react-router-dom";

export default function ProductPage({id,title,thumbnail,description,price,}) {
  let navigate = useNavigate();
  return (
    <div>
      {/* <h1>Product Page</h1> */}
      <div
        onClick={() => {navigate(`/product/${id}`);}}
        key={id}
        style={{
          width: "200px",
          backgroundColor: "#ffffff",
          borderRadius: "15px",
          padding: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          height:"330px"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        }}
      >
        {/* Image */}
        <img
          src={thumbnail}
          alt={title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        />

        {/* Name */}
        <h3
          style={{
            color: "#4d7b56",
            fontSize: "18px",
            marginBottom: "5px",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: "14px", color: "#777" }}>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>

        {/* Price */}
        <p style={{ fontWeight: "bold", color: "#d32f2f" }}>${price}</p>

      </div>
    </div>
  );
}
