const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  image: String,
  likes: { type: Number, default: 0 },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
    },
  ],
});

module.exports = mongoose.model("Recipe", RecipeSchema);