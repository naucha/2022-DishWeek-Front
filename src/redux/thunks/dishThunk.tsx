import axios from "axios";
import toast from "react-hot-toast";
import { loadDishActionCreator } from "../features/dishSlice";
import { AppDispatch } from "../store/store";

export const getDishThunk = (id: string) => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}dishes/${id}`;

  const token = localStorage.getItem("token");
  try {
    const {
      data: { singleDish },
    } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (singleDish) {
      dispatch(loadDishActionCreator(singleDish));
    }
  } catch (error: any) {
    toast.error("Failed, please try again");
    return error.message;
  }
  toast.success("Load selected dish");
  toast.dismiss();
};
