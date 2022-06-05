import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishesData } from "../../types/types";

const initialState: DishesData[] = [];

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    loadDishes: (dishes, action: PayloadAction<DishesData[]>) => [
      ...action.payload,
    ],
    deleteDish: (dishes, action: PayloadAction<string>) =>
      dishes.filter((dishes) => dishes.id !== action.payload),
  },
});

export const {
  loadDishes: loadDishesActionCreator,
  deleteDish: deleteDishesActionCreator,
} = dishesSlice.actions;

export default dishesSlice.reducer;
