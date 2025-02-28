const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
const User = require("../models/User");

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).send("Error fetching recipes.");
  }
};

exports.addRecipe = async (req, res) => {
  const { name, ingredients, instructions } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

  try {
    const newRecipe = new Recipe({
      name,
      ingredients: Array.isArray(ingredients) ? ingredients : ingredients.split(","),
      instructions,
      image: imagePath,
    });
    await newRecipe.save();
    res.send("Recipe added successfully!");
  } catch (err) {
    res.status(500).send("Error adding recipe.");
  }
};

exports.likeRecipe = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  try {
    const recipe = await Recipe.findById(id);
    const user = await User.findById(userId);
    if (!recipe || !user) return res.status(404).send("Recipe/User not found.");

    if (recipe.likedBy.some((likedUserId) => likedUserId.equals(userId))) {
      return res.status(400).send("You already liked this recipe.");
    }

    recipe.likedBy.push(userId);
    recipe.likes += 1;
    user.likedRecipes.push(id);
    await Promise.all([recipe.save(), user.save()]);
    res.send("Recipe liked!");
  } catch (err) {
    res.status(500).send("Error liking recipe.");
  }
};

exports.addComment = async (req, res) => {
  const { text, userId } = req.body;
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).send("Recipe not found.");

    
    recipe.comments.push({ userId, text });
    await recipe.save();
    
    res.send("Comment added!");
  } catch (err) {
    res.status(500).send("Error adding comment.");
  }
};

