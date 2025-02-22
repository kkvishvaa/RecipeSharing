import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />


          <Route path="/recipe" element={<Recipe />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
