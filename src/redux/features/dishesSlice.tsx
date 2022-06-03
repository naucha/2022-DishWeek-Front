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
  },
});

export const { loadDishes: loadDishesActionCreator } = dishesSlice.actions;

export default dishesSlice.reducer;
