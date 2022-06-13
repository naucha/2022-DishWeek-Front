import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/Landing/LandingPage";
import { LogInPage } from "./pages/LogIn/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { logInActionCreator } from "./redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { getDishesThunk } from "./redux/thunks/dishesThunks";
import { UserData } from "./types/types";
import { Toaster } from "react-hot-toast";
import { HomePage } from "./pages/Home/HomePage";
import GateController from "./components/GateController/GateController";
import { Error404Page } from "./pages/Error404/Error404";
import { CreatePage } from "./pages/Create/CreatePage";
import { AntiGateController } from "./components/AntiGateController/AntiGateController";
import { EditPage } from "./pages/Edit/EditPage";

function App() {
  const dispatch = useAppDispatch();
  const userStateInfo = useAppSelector((state) => state.user.logged);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getDishesThunk());
      const { id, name, username }: UserData = jwtDecode(token);
      dispatch(logInActionCreator({ id, name, username }));
    }
  }, [dispatch, userStateInfo, token]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <GateController>
              <Navigate to="/home" />
            </GateController>
          }
        />
        <Route
          path="/landing"
          element={
            <AntiGateController>
              <LandingPage />
            </AntiGateController>
          }
        />
        <Route
          path="/login"
          element={
            <AntiGateController>
              <LogInPage />
            </AntiGateController>
          }
        />
        <Route
          path="/register"
          element={
            <AntiGateController>
              <RegisterPage />
            </AntiGateController>
          }
        />
        <Route
          path="/home"
          element={
            <GateController>
              <HomePage />
            </GateController>
          }
        />
        <Route
          path="/create"
          element={
            <GateController>
              <CreatePage />
            </GateController>
          }
        />
        <Route
          path="/edit"
          element={
            <GateController>
              <EditPage />
            </GateController>
          }
        />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
