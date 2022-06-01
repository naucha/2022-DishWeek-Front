import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, User } from "../../types/types";

const initialState: State = {
  userInfo: {
    name: "",
    username: "",
    id: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (user, action: PayloadAction<User>) => ({
      userInfo: { ...action.payload },
      logged: false,
    }),
  },
});

export const { signUp: singUpActionCreator } = userSlice.actions;
export default userSlice.reducer;
