import React, { useState } from "react";
import "./MealCart.css";

export const MealCart = ({ detail }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  if (!detail || detail.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Meal Cards */}
      <div className="meal-container">
        {detail.map((ele) => (
          <div className="meal-card" key={ele.idMeal}>
            <img
              src={ele.strMealThumb}
              alt={ele.strMeal}
              className="meal-img"
            />
            <h3 className="meal-title">{ele.strMeal}</h3>
            <button className="meal-btn" onClick={() => setSelectedMeal(ele)}>
              View Recipe
            </button>
          </div>
        ))}
      </div>

      {/* Recipe Modal */}
      {selectedMeal && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close Button */}
            <button className="close-btn" id="1" onClick={() => setSelectedMeal(null)}>
              ✕
            </button>

            {/* Dish Name */}
            <h2 className="modal-title">{selectedMeal.strMeal}</h2>

            {/* Dish Image */}
            <img
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              className="modal-img"
            />

            {/* Category + Area */}
            <div className="meta-info">
              {selectedMeal.strCategory && (
                <p>
                  <strong>Category:</strong> {selectedMeal.strCategory}
                </p>
              )}
              {selectedMeal.strArea && (
                <p>
                  <strong>Area:</strong> {selectedMeal.strArea}
                </p>
              )}
            </div>

            {/* ✅ Ingredients List */}
            <div className="ingredients-box">
              <h3 style={{ color: "black", fontSize: "22px" }}>📝 Ingredients:</h3>
              <ul className="ingredients-list">
                {Array.from({ length: 20 }).map((_, i) => {
                  const ingredient = selectedMeal[`strIngredient${i + 1}`];
                  const measure = selectedMeal[`strMeasure${i + 1}`];
                  return (
                    ingredient &&
                    ingredient.trim() !== "" && (
                      <li key={i}>
                        {ingredient} - <span>{measure}</span>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>

            {/* Instructions */}
            {selectedMeal.strInstructions ? (
              <div>
                <h3 style={{ color: "black", fontSize: "22px" }}>📖 Instructions:</h3>
                <p className="instructions">{selectedMeal.strInstructions}</p>
              </div>
            ) : (
              <p style={{ color: "red" }}>⚠️ No instructions available.</p>
            )}

            {/* YouTube Video Link */}
            {selectedMeal.strYoutube && (
              <a
                href={selectedMeal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-link"
              >
                🎥 Watch Recipe Video
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
