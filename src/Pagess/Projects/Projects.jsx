import React from "react";
import Weather from "../../assets/Weather.png";
import recipe from "../../assets/Recipefinder.png";
import mystore from "../../assets/My Store.png";
import coffee from "../../assets/Coders Coffee.png";
import organic from "../../assets/Bootstrapproject.png"
import sales from "../../assets/salesorder.png"
import "./project.css";

export const Projects = () => {
  return (
    <div>
      {/* ----------------------------WEATHER ------------------------------- */}
      <div className="weather">
        <div>
          <img src={Weather} alt="" />
        </div>
        <div className="weatherinfo">
          <div>
            <h1>
              A modern weather app that gives you real-time temperature,
              conditions, and city-wise climate updates. Just enter your city
              name and get instant, accurate weather right at your fingertips.
            </h1>
          </div>
          <div>
            <h2>Link</h2>
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
            <h2>
              This app instantly finds recipes for any food you search. Just
              enter the dish name and get the full recipe with ingredients and
              step-by-step instructions. Whether you're a beginner or an
              experienced cook, the app provides easy, reliable, and quick
              recipes to help you cook delicious meals at home.
            </h2>
          </div>
          <div>
            <h3>link</h3>
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
            <h2>
              My Store — A fully functional e-commerce project built using API
              integration. This project is a demo online shopping system where
              users can browse multiple products, view details, add items to
              their cart, and proceed to a simulated checkout.
            </h2>
          </div>
          <div>
            <h3>LINK</h3>
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
            <h2>
              Coders Coffee — A React-based animated clone website. This is a
              front-end clone of the Coders Coffee website, recreated purely
              using React and Framer Motion. The project focuses on smooth UI
              interactions, animated components, and modern layout transitions.
            </h2>
          </div>
          <div>
            <h3>link</h3>
          </div>
        </div>
      </div>

       {/* ----------------------------BOOTSTRAP ------------------------------- */}
       <div className="organic">
        <div>
          <img src={organic} alt="" />
        </div>
        <div className="organicinfo">
          <div>
            <h2>A responsive website built using Bootstrap, featuring a clean layout, structured sections, and mobile-friendly design. The project highlights my skills in using Bootstrap’s grid system, components, and utilities to create a simple, modern, and functional UI.</h2>
          </div>
          <div>
            <h3>LINK</h3>
          </div>
        </div>
       </div>

       {/* ----------------------------SALES ORDER ------------------------------- */}
       <div className="salesorder">
        <div>
          <img src={sales} alt="" />
        </div>
        <div className="salesorderinfo">
          <div>
            <h2>A fast and dynamic Sales Order entry tool built with React. It allows quick customer input, multi-item management, auto-calculations for amount, discount, and taxes, and provides a clean real-time summary for error-free order creation.</h2>
          </div>
          <div>
            <h3>Link</h3>
          </div>
        </div>
       </div>

    </div>
  );
};
