import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "../features/dishesSlice";

import userReducer from "../features/userSlice";
import dishReducer from "../features/dishSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    dishes: dishesReducer,
    dish: dishReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
