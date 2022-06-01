import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserState } from "../../types/types";

const initialState = {
  name: "",
  username: "",
  id: "",
  logged: false,
} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user: UserState, action: PayloadAction<UserData>) => ({
      ...action.payload,
      logged: true,
    }),
    logout: () => ({ name: "", username: "", id: "", logged: false }),
  },
});

export const { login: logInActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
export default userSlice.reducer;
