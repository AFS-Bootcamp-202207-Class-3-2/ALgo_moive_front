import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
};

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    getMovieDetail: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
