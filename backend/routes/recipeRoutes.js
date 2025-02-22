const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

// Recipe Routes
router.get("/",authMiddleware,recipeController.getAllRecipes);
router.post("/",authMiddleware,upload.single("image"), recipeController.addRecipe);
router.post("/:id/like", authMiddleware, recipeController.likeRecipe);
router.post("/:id/comment",authMiddleware,recipeController.addComment);

module.exports = router;