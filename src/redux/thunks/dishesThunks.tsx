import axios from "axios";
import {
  deleteDishesActionCreator,
  loadDishesActionCreator,
} from "../features/dishesSlice";
import { AppDispatch } from "../store/store";

export const getDishesThunk = () => async (dispatch: AppDispatch) => {
  const route: string = `${process.env.REACT_APP_API_URL}dishes/list`;
  const token = localStorage.getItem("token");
  try {
    const { data: dishes } = await axios.get(route, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (dishes) {
      dispatch(loadDishesActionCreator(dishes));
    }
  } catch (error: any) {
    return error.message;
  }
};

export const deleteDishesThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}dishes/${id}`;
    const token = localStorage.getItem("token");
    try {
      const { status } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 200) {
        dispatch(deleteDishesActionCreator(id));
      }
    } catch (error: any) {
      return error.message;
    }
  };
