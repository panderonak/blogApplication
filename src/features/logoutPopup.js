import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const logoutPopUpSlice = createSlice({
  name: "logoutPopUp",
  initialState,
  reducers: {
    showPopUp: (state) => {
      state.isVisible = true;
    },
    hidePopUp: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showPopUp, hidePopUp } = logoutPopUpSlice.actions;

const logoutPopUpReducer = logoutPopUpSlice.reducer;

export default logoutPopUpReducer;
