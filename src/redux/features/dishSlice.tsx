import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DishesData } from "../../types/types";

const initialState: DishesData = {
  id: "",
  name: "",
  veggie: "",
  ingredients: "",
  image: "",
  resume: "",
  recipe: "",
  cookingtime: "",
  daysofweek: [],
  createdby: "",
  imagebackup: "",
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {
    loadDish: (dish, action: PayloadAction<DishesData>) => ({
      ...action.payload,
    }),
    blankDish: () => initialState,
  },
});

export const {
  loadDish: loadDishActionCreator,
  blankDish: blankDishActionCreator,
} = dishSlice.actions;

export default dishSlice.reducer;
