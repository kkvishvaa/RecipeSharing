const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
dotenv.config();

const dbURI = process.env.MONGODB_URL;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


app.use("/api", authRoutes);       // /api/register, /api/login
app.use("/recipes", recipeRoutes); // /recipes, /recipes/:id/like, etc

app.listen(5000, () => console.log("Server running on port 5000"));