// main.tsx (or index.tsx)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "./screens/SignIn";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home"; // This will now be our new Home component

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/*" element={<Home />} /> {/* Added /* for nested routes */}
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  </StrictMode>
);