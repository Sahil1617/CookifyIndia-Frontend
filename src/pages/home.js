import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./home.css"; // Custom styling
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap import
import { Link } from "react-router-dom";  

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://cookifyindia-backend.onrender.com/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!userID) return;

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://cookifyindia-backend.onrender.com/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("https://cookifyindia-backend.onrender.com/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">🍽️ Welcome to Cookify India</h1>
          <p className="lead" >Discover, share, and enjoy the best homemade recipes!</p>
        </div>
      </header>

      {/* Recipe Section */}
      <div className="container my-5">
        <h2 className="text-center text-danger fw-bold mb-5">🔥 Featured Recipes</h2>
        <div className="row">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="col-md-4 mb-4 card recipe-card shadow-sm">
            <Link to={`/recipe/${recipe._id}`} className="text-decoration-none">
              <div className="card recipe-card shadow-sm">
                <img src={recipe.imageUrl} className="card-img-top" alt={recipe.name} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    {recipe.instructions.length > 100
                      ? `${recipe.instructions.substring(0, 100)}...`
                      : recipe.instructions}
                  </p>
                  <p className="text-muted">⏳ {recipe.cookingTime} mins</p>
                </div>
              </div>
            </Link>
            <button
              onClick={() => saveRecipe(recipe._id)}
              className={`btn btn-${isRecipeSaved(recipe._id) ? "success" : "danger"} w-100 mt-2`}
              disabled={isRecipeSaved(recipe._id)}
            >
              {isRecipeSaved(recipe._id) ? "✔️ Added!" : "➕ Add to Saved"}
            </button>
          </div>
      ))}

        </div>
      </div>

      {/* About Section */}
      <section className="about-section bg-light py-5 text-center">
  <div className="container">
    <h2 className="text-danger fw-bold">Why Cookify India?</h2>
    <p className="lead mx-auto">
      Your go-to platform for discovering and sharing authentic homemade recipes.  
      Join our community and start cooking today!
    </p>
  </div>
</section>

      {/* Call to Action */}
      <section className="text-center my-5">
        <h2 className="fw-bold">👨‍🍳 Join Us & Share Your Own Recipe!</h2>
        <a href="/create-recipe" className="btn btn-danger btn-lg">
          ➕ Create Recipe
        </a>
      </section>
    </div>
  );
};
