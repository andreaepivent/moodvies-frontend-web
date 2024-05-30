import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "moods",
  initialState: [],
  reducers: {
    addMood: (state, action) => {
      return [action.payload];
    },
  },
});

export const { addMood } = moodSlice.actions;
export default moodSlice.reducer;
