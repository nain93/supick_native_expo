import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

const rootReducer = {
  userReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
