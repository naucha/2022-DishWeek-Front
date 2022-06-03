import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "../features/dishesSlice";

import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    dishes: dishesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
