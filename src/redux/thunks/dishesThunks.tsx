import axios from "axios";
import {
  createDishActionCreator,
  deleteDishActionCreator,
  loadDishesActionCreator,
} from "../features/dishesSlice";
import { AppDispatch } from "../store/store";

export const getDishesThunk = () => async (dispatch: AppDispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}dishes/list`;
  const token = localStorage.getItem("token");
  try {
    const { data: dishes } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (dishes) {
      dispatch(loadDishesActionCreator(dishes));
    }
  } catch (error: any) {
    return error.message;
  }
};

export const deleteDishThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}dishes/${id}`;

    const token = localStorage.getItem("token");
    try {
      const { status } = await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status === 200) {
        dispatch(deleteDishActionCreator(id));
      }
    } catch (error: any) {
      return error.message;
    }
  };

export const createDishThunk =
  (dishData: any) => async (dispatch: AppDispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}dishes/`;
    const token = localStorage.getItem("token");

    try {
      const {
        data: { newDish },
      } = await axios.put(url, dishData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(createDishActionCreator(newDish));
    } catch (error: any) {}
  };
