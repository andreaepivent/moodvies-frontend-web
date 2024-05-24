import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.value.push(action.payload);
    },
    deleteMovie: (state, action) => {
      state.value = state.value.filter(
        (movie) => movie.id !== action.payload.id
      );
    },
  },
});

export const { addMovie, deleteMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
