const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/authDB", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api", authRoutes);       // /api/register, /api/login
app.use("/recipes", recipeRoutes); // /recipes, /recipes/:id/like, etc

app.listen(5000, () => console.log("Server running on port 5000"));