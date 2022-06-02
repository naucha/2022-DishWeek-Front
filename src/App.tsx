import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginButtonLanding from "./components/LoginButtonLanding/LoginButtonLanding";
import { LogInPage } from "./pages/LogIn/LoginPage";

import { RegisterPage } from "./pages/Register/RegisterPage";

function App() {
  return (
    <>
      <LoginButtonLanding></LoginButtonLanding>
      {/* <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes> */}
    </>
  );
}

export default App;
