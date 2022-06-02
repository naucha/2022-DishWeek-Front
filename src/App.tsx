import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing/LandingPage";
import { LogInPage } from "./pages/LogIn/LoginPage";

import { RegisterPage } from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
