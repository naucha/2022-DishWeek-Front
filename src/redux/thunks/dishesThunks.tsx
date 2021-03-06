import axios from "axios";
import toast from "react-hot-toast";
import { DishesData } from "../../types/types";
import {
  createDishActionCreator,
  deleteDishActionCreator,
  loadDishesActionCreator,
  updateDishActionCreator,
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
      toast.error("Failed to delete, please try again");
      return error.message;
    }
    toast.success("Removed");
  };

export const createDishThunk =
  (dishData: any) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const url: string = `${process.env.REACT_APP_API_URL}dishes/create`;

      const { data } = await axios.post(url, dishData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch(createDishActionCreator(data.dish));
      toast.success("New recipe added");
      return;
    } catch (error) {
      toast.error("Failed to add, please try again");
    }
  };

export const updateThunk =
  (idDish: string, dishData: DishesData) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const url: string = `${process.env.REACT_APP_API_URL}dishes/edit/${idDish}`;

      const { data } = await axios.put(url, dishData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(updateDishActionCreator(data));

      toast.success("Updated");
    } catch (error) {
      toast.error("Failed to update, please try again");
    }
  };
