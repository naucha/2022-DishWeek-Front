import axios from "axios";
import { UserSignUpData } from "../../types/types";
import { AppDispatch } from "../store/store";

export const signUpUserThunk =
  (formData: UserSignUpData) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    await axios.post(url, formData);
  };
