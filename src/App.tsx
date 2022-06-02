import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogIn/LoginPage";

import { RegisterPage } from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
