import axios from "axios";
import { UserSignUpData } from "../../types/types";
import { singUpActionCreator } from "../features/userSlice";
import { AppDispatch } from "../store/store";

export const signUpUserThunk =
  (formData: UserSignUpData) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}user/register`;

    const { data } = await axios.post(url, formData);

    if (data) {
      const newUser = {
        name: data.name,
        username: data.username,
        password: data.password,
      };
    }

    dispatch(singUpActionCreator(data));
  };
