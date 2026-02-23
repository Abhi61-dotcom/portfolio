import React from "react";
import Weather from "../../assets/Weather.png";
import recipe from "../../assets/Recipefinder.png";
import mystore from "../../assets/My Store.png";
import coffee from "../../assets/Coders Coffee.png";
import uPm from "../../assets/userProductManagement.png"
// import organic from "../../assets/Bootstrapproject.png";
import sales from "../../assets/salesorder.png";
import "./project.css";

export const Projects = () => {
  return (
    <div>


      {/* ----------------------------User Product Management ------------------------------- */}
      <div className="weather">
        <div>
          <img src={uPm} alt="" />
        </div>
        <div className="weatherinfo">
          <div>
            <div className="main" >
              <div>
                <strong style={{ fontSize: "40px" }}>User Product Management</strong>
              </div>
              <div><strong style={{ fontSize: "40px" }}>Website</strong></div>
            </div>
            <h1>
              A MERN-based User Product Management application where users can securely authenticate and perform Create, Read, Update, and Delete operations on products. Designed with REST APIs and a responsive frontend for efficient data handling.
            </h1>
          </div>
          <div>
            <button
              onClick={() => window.open("https://user-product-management-alpha.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            {/* {/* React.js, Node.js, Express.js, MongoDB, JWT/*} */}
            <h4>React.js</h4>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>MongoDB</h4>
            <h4>JWT</h4>
          </div>
        </div>
      </div>




      {/* ----------------------------WEATHER ------------------------------- */}
      <div className="weather">
        <div>
          <img src={Weather} alt="" />
        </div>
        <div className="weatherinfo">
          <div>
            <div className="main" >
              <div>
                <strong style={{ fontSize: "40px" }}>Modern Weather</strong>
              </div>
              <div><strong style={{ fontSize: "40px" }}>Application</strong></div>
            </div>
            <h1>
              A modern weather app that gives you real-time temperature,
              conditions, and city-wise climate updates. Just enter your city
              name and get instant, accurate weather right at your fingertips.
            </h1>
          </div>
          <div>
            <button
              onClick={() => window.open("https://weather-findder.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
          </div>
        </div>
      </div>

      {/* ----------------------------RECIPE ------------------------------- */}
      <div className="recipe">
        <div>
          <img src={recipe} alt="" />
        </div>
        <div className="recipeinfo">
          <div>
            <div>
              <div><strong style={{ fontSize: "40px" }}>Food Recipe Finder </strong></div>
              <div><strong style={{ fontSize: "40px" }}>Website</strong></div>
            </div>
            <h2>
              This app instantly finds recipes for any food you search. Just
              enter the dish name and get the full recipe with ingredients and
              step-by-step instructions. Whether you're a beginner or an
              experienced cook, the app provides easy, reliable, and quick
              recipes to help you cook delicious meals at home.
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open("https://recipe-findder.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>Api</h4>
          </div>
        </div>
      </div>

      {/* ----------------------------MY STORE ------------------------------- */}
      <div className="mystore">
        <div>
          <img src={mystore} alt="" />
        </div>
        <div className="mystoreinfo">
          <div>
            <div>
              <div><strong style={{ fontSize: "40px" }}>E-commerce </strong></div>
              <div><strong style={{ fontSize: "40px" }}>Website</strong></div>
            </div>
            <h2>
              My Store — A fully functional e-commerce project built using API
              integration. This project is a demo online shopping system where
              users can browse multiple products, view details, add items to
              their cart, and proceed to a simulated checkout.
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open("https://my-storre.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>React</h4>
            <h4>Api</h4>
          </div>
        </div>
      </div>

      {/* ----------------------------COFFEE ------------------------------- */}
      <div className="coffee">
        <div>
          <img src={coffee} alt="" />
        </div>
        <div className="coffeeinfo">
          <div>
            <div>
              <div><strong style={{ fontSize: "40px" }}>Coders Coffee</strong></div>
              <div><strong style={{ fontSize: "40px" }}>Clone</strong></div>
            </div>
            <h2>
              Coders Coffee — A React-based animated clone website. This is a
              front-end clone of the Coders Coffee website, recreated purely
              using React and Framer Motion. The project focuses on smooth UI
              interactions, animated components, and modern layout transitions.
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open("https://annimated-coffee.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Bootstrap</h4>
          </div>
        </div>
      </div>

      {/* ----------------------------BOOTSTRAP ------------------------------- */}
      {/* <div className="organic">
        <div>
          <img src={organic} alt="" />
        </div>
        <div className="organicinfo">
          <div>
            <div>
              <div><strong style={{fontSize:"40px"}}>Basic Sample</strong></div>
              <div><strong style={{fontSize:"40px"}}>Website</strong></div>
            </div>
            <h2>
              A responsive website built using Bootstrap, featuring a clean
              layout, structured sections, and mobile-friendly design. The
              project highlights my skills in using Bootstrap’s grid system,
              components, and utilities to create a simple, modern, and
              functional UI.
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open("https://bootstrap-web-drab.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{fontSize:"15px",marginTop:"25px" , marginBottom:"5px"}}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Bootstrap</h4>
          </div>
        </div>
      </div> */}

      {/* ----------------------------SALES ORDER ------------------------------- */}
      <div className="salesorder">
        <div>
          <img src={sales} alt="" />
        </div>
        <div className="salesorderinfo">
          <div>
            <div>
              <div><strong style={{ fontSize: "40px" }}>Sales Order Billing</strong></div>
              <div><strong style={{ fontSize: "40px" }}>Website</strong></div>
            </div>
            <h2>
              A fast and dynamic Sales Order entry tool built with React. It
              allows quick customer input, multi-item management,
              auto-calculations for amount, discount, and taxes, and provides a
              clean real-time summary for error-free order creation.
            </h2>
          </div>
          <div>
            <button
              onClick={() => window.open("https://salesordder.vercel.app/")}
            >
              Visit Project --&gt;
            </button>
          </div>
          <h2 style={{ fontSize: "15px", marginTop: "25px", marginBottom: "5px" }}>Technologies Used:</h2>
          <div className="technology">
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>Javascript</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
