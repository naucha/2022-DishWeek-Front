import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogIn/LoginPage";

import { SignUpPage } from "./pages/SignUp/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
