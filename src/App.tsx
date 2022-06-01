import React from "react";
import { Route, Routes } from "react-router-dom";

import { SignUpPage } from "./pages/SignUp/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
