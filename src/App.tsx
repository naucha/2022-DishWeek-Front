import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing/LandingPage";
import { LogInPage } from "./pages/LogIn/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { useAppDispatch } from "./redux/store/hooks";
import { getDishesThunk } from "./redux/thunks/dishesThunks";
import { UserData } from "./types/types";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/Home/HomePage";
import GateController from "./components/GateController/GateController";
import { Error404Page } from "./pages/Error404/Error404";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getDishesThunk());
      const { id, name, username }: UserData = jwtDecode(token);
      dispatch(logInActionCreator({ id, name, username }));
    }
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/landing" />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <GateController>
                <HomePage />
              </GateController>
            }
          />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
