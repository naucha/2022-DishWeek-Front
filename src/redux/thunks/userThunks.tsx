import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  UserData,
  UserLoginData,
  UserLoginResponse,
  UserRegisterData,
} from "../../types/types";
import { logInActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const registerUserThunk =
  (formData: UserRegisterData) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}user/register`;
    await axios.post(route, formData);
  };

export const loginUserThunk =
  (loginInfo: UserLoginData) => async (dispatch: AppDispatch) => {
    debugger;
    try {
      const route: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      }: UserLoginResponse = await axios.post(route, loginInfo);

      localStorage.setItem("token", token);

      const userInfo: UserData = jwtDecode(token);
      debugger;
      dispatch(logInActionCreator(userInfo));
    } catch (error) {}
  };
