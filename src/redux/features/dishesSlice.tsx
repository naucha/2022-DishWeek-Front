import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishesState } from "../../types/types";

const initialState = [
  {
    name: "",
    veggy: false,
    ingredients: [],
    image: "",
    resume: "",
    recipe: "",
    cooking: "",
    daysOfWeek: [],
  },
] as DishesState;

const dishSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    loadDishes: (dishes: DishesState, action: PayloadAction<DishesState>) => [
      ...action.payload,
    ],
  },
});

export const { loadDishes: loadDishesActionCreator } = dishSlice.actions;

export default dishSlice.reducer;
