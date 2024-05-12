import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice/userSlice";
import biodataReducer from "../features/biodataSlice/biodataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    biodata: biodataReducer,
  },
});

export default store;
