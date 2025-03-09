import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://cookifyindia-backend.onrender.com/recipes/${id}`
        );
        setRecipe(response.data); // Update state with full recipe data
      } catch (err) {
        console.log("Error fetching recipe details:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <img src={recipe.imageUrl} className="card-img-top" alt={recipe.name} />
        <div className="card-body">
          <h2 className="text-danger fw-bold">{recipe.name}</h2>
          <p className="lead">{recipe.description}</p>

          <h4>🥘 Ingredients:</h4>
          <ul>
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <p>No ingredients available.</p>
            )}
          </ul>

          <h4>📖 Instructions:</h4>
          <p>{recipe.instructions || "Instructions not available."}</p>

          <p className="text-muted">⏳ Cooking Time: {recipe.cookingTime} mins</p>
          <a href="/" className="btn btn-primary">🔙 Back to Recipes</a>
        </div>
      </div>
    </div>
  );
};
