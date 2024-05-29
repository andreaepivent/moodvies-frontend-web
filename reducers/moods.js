import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "moods",
  initialState: "",
  reducers: {
    displayMood: (state, action) => {
      return action.payload; // Return the new state directly
    },
  },
});

export const { displayMood } = moodSlice.actions;
export default moodSlice.reducer;