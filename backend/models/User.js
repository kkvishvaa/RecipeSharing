const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  likedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }]
});

module.exports = mongoose.model("User", UserSchema);