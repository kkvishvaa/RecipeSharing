🍽️FlavorBridge

A web-based platform where users can discover, share, and save recipes. This application allows users to explore a variety of dishes and  upload their own recipes.

🌍 Live Demo

🔗 Visit Here: https://recipe-sharing-mfu1.vercel.app/


🚀 Features
📝 Add & Share Recipes – Users can upload their favorite recipes with ingredients, steps, and images.

👥 User Authentication – Secure login/signup using JWT (JSON Web Tokens).

💬 Comments & Ratings – Engage with other users by commenting and rating recipes.

🌐 Responsive UI – Works smoothly on mobile, tablet, and desktop.


🛠️ Tech Stack
Frontend: React (with Bootstrap for styling)

Backend: Node.js with Express.js

Database: MongoDB (for data storage)

Authentication: JWT (JSON Web Token) for secure user authentication


🔐 Authentication Flow
User Signup/Login → The user registers or logs in, receiving a JWT token.

Token Storage → The token is stored in  HTTP-only cookies for security.

Protected Routes → Access to certain features (e.g., adding recipes) requires a valid JWT.

Token Verification → The backend verifies JWTs to allow authenticated actions.
