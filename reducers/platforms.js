import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{
    src: "AppleTV.png",
    name: "Apple"
  },
  {
    src: "Disney+.png",
    name: "Disney+"
  }]
};

export const PlatformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlatform: (state, action) => {
      if (!state.value.some(movie => movie.src === action.payload.src)) {
        state.value.push(action.payload);
      }
    },
    deletePlatform: (state, action) => {
      state.value = state.value.filter(
        (platform) => platform.src !== action.payload
      );
    },
  },
});

export const { addPlatform, deletePlatform } = PlatformSlice.actions;
export default PlatformSlice.reducer;
