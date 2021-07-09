import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    nickName: "guest",
    loading: false,
    isLogin: false,
  },
  reducers: {
    logIn: (state) => {
      state.islogin = true;
    },
    logOut: (state) => {
      state.islogin = false;
    },
    userNickName: (state, action) => {
      state.nickName = action.payload;
    },
  },
});

export const { logIn, logOut, userNickName } = userSlice.actions;
export const handleLogin = (state) => state.userSlice.islogin;

export default userSlice.reducer;
