import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: true,
  allPosts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state, action) => {
      state.isFetching = false;
      state.allPosts = action.payload.allPosts;
    },
    clearAllPosts: (state) => {
      state.isFetching = true;
      state.allPosts = null;
    },
  },
});

export const { setAllPosts, clearAllPosts } = postSlice.actions;

const PostReducer = postSlice.reducer;
export default PostReducer;
