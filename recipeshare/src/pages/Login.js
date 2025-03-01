import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const API_URL =process.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "register"; 
    const url = `${API_URL}/api/${endpoint}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      if (isLogin) {
        alert("Login successful!");
        Cookies.set("token", data.token, {secure: true }); 
        navigate("/recipe");
      } else {
        alert("Registration successful! Please login.");
        setIsLogin(true);
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form-title">{isLogin ? "Login" : "Signup"}</h2>
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={`login-button ${isLogin ? "login-button-primary" : "login-button-secondary"}`}>
          {isLogin ? "Login" : "Signup"}
        </button>
        <p className="login-toggle-text">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="login-toggle-button"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;