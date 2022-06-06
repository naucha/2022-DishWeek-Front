import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
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
    try {
      const route: string = `${process.env.REACT_APP_API_URL}user/register`;
      await axios.post(route, formData);
      toast.success("Now you are registered!");
    } catch (error) {
      toast.error("Wrong username or Password!");
    }
  };

export const loginUserThunk =
  (loginInfo: UserLoginData) => async (dispatch: AppDispatch) => {
    try {
      toast.loading("Loading...");
      const route: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      }: UserLoginResponse = await axios.post(route, loginInfo);

      localStorage.setItem("token", token);
      const userInfo: UserData = jwtDecode(token);

      dispatch(logInActionCreator(userInfo));
      toast.dismiss();
      toast.success("Succesfully logged in!");
    } catch (error) {
      toast.dismiss();
      toast.success("Wrong username or Password!");
    }
  };
