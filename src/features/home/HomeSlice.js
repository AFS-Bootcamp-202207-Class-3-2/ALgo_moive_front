import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: []
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        addAllMovies: (state, action) => {
            console.log(action.payload);
            state.movies = action.payload;
        }
    }
});
export const { addAllMovies} = homeSlice.actions;
export default homeSlice.reducer;
