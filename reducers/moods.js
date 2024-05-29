import { createSlice } from "@reduxjs/toolkit";

const moodSlice = createSlice({
  name: "moods",
  initialState: [],
  reducers: {
    addMood: (state, action) => {
      state.push(action.payload);
    },
    removeMood: (state) => {
      return [];
    },
  },
});

export const { addMood, removeMood } = moodSlice.actions;
export default moodSlice.reducer;
