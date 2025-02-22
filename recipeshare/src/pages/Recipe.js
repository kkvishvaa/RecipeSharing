import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/Recipe.css";

const Recipe = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:5000";
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ 
    name: "", 
    ingredients: "", 
    instructions: "", 
    image: null 
  });
  const [commentInputs, setCommentInputs] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]); 

  const fetchRecipes = async () => {
    const token = Cookies.get("token");
    try {
      const response = await axios.get(`${API_URL}/recipes`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRecipes(response.data);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      alert(err.response?.data?.message || "Error loading recipes");
    }
  };

  useEffect(() => { fetchRecipes(); }, []);

  const handleLike = async (id) => {
    const token = Cookies.get("token");
    try {
      await axios.post(`${API_URL}/recipes/${id}/like`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchRecipes();
    } catch (err) {
      console.error("Error liking recipe:", err);
      alert("Failed to like recipe");
    }
  };

  const handleComment = async (id) => {
    const text = commentInputs[id]?.trim();
    if (!text) return;
    const token = Cookies.get("token");
    try {
      await axios.post(`${API_URL}/recipes/${id}/comment`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCommentInputs(prev => ({...prev, [id]: ""}));
      await fetchRecipes();
    } catch (err) {
      console.error("Error adding comment:", err);
      alert("Failed to add comment");
    }
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const formData = new FormData();
    
    formData.append("name", newRecipe.name);
    newRecipe.ingredients.split(',').forEach(ingredient => {
      formData.append("ingredients", ingredient.trim());
    });
    formData.append("instructions", newRecipe.instructions);
    if (newRecipe.image) formData.append("image", newRecipe.image);

    try {
      await axios.post(`${API_URL}/recipes`, formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      await fetchRecipes();
      setNewRecipe({ name: "", ingredients: "", instructions: "", image: null });
      setImagePreview(null);
      document.getElementById("image-input").value = "";
    } catch (err) {
      console.error("Error adding recipe:", err);
      alert(err.response?.data?.message || "Failed to add recipe");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewRecipe(prev => ({...prev, image: file}));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Shared Recipes</h1>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <div className="card-header">
              <h3 className="recipe-title">{recipe.name}</h3>
              <div className="like-container">
                <button 
                  className="like-button"
                  onClick={() => handleLike(recipe._id)}
                  aria-label="Like recipe"
                >
                  ❤️
                </button>
                <span className="likes-count">{recipe.likes}</span>
              </div>
            </div>

            {recipe.image && (
              <img
                src={API_URL + recipe.image}
                alt={recipe.name}
                className="recipe-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
            )}

            <div className="recipe-details">
              <div className="ingredients-section">
                <h4>Ingredients</h4>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div className="instructions-section">
                <h4>Instructions</h4>
                <ol>
                  {recipe.instructions.split('\n').map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="comments-section">
              <h4>Comments ({recipe.comments.length})</h4>
              <div className="comments-list">
                {recipe.comments.map((c, index) => (
                  <div key={index} className="comment">
                    <p className="comment-text">{c.text}</p>
                  </div>
                ))}
              </div>
              <div className="comment-input-container">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInputs[recipe._id] || ""}
                  onChange={(e) => setCommentInputs(prev => ({
                    ...prev,
                    [recipe._id]: e.target.value
                  }))}
                  className="comment-input"
                />
                <button 
                  className="comment-button"
                  onClick={() => handleComment(recipe._id)}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-recipe-section">
        <h2 className="sub-heading">Share Your Recipe</h2>
        <form className="recipe-form" onSubmit={handleAddRecipe}>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input
              id="name"
              type="text"
              required
              value={newRecipe.name}
              onChange={(e) => setNewRecipe(prev => ({...prev, name: e.target.value}))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ingredients">Ingredients (comma separated)</label>
            <input
              id="ingredients"
              type="text"
              required
              value={newRecipe.ingredients}
              onChange={(e) => setNewRecipe(prev => ({...prev, ingredients: e.target.value}))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              required
              value={newRecipe.instructions}
              onChange={(e) => setNewRecipe(prev => ({...prev, instructions: e.target.value}))}
              rows="5"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image-input">Recipe Image</label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
          </div>

          <button type="submit" className="submit-button">
            Share Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recipe;