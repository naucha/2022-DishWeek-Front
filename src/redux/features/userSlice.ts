import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/types";

const initialState = {
  name: "",
  username: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (user, action: PayloadAction<User>) => ({ ...action.payload }),
  },
});

export const { signUp: singUpActionCreator } = userSlice.actions;
export default userSlice.reducer;
