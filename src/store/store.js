import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import postReducer from "../features/postSlice";
import logoutPopUpReducer from "../features/logoutPopup";

const store = configureStore({
  reducer: { auth: authReducer, posts: postReducer, popUp: logoutPopUpReducer },
});

export default store;
