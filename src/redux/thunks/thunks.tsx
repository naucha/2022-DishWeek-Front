import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserLoginData, UserSignUpData } from "../../types/types";
import { AppDispatch } from "../store/store";

export const signUpUserThunk =
  (formData: UserSignUpData) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    await axios.post(url, formData);
  };

export const loginUserThunk =
  (loginInfo: UserLoginData) => async (dispatch: AppDispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      } = await axios.post(url, loginInfo);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode(token);
    } catch (error) {}
  };
