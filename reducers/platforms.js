import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const PlatformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlatform: (state, action) => {
      state.value.push(action.payload);
    },
    deletePlatform: (state, action) => {
      state.value = state.value.filter(
        (platform) => platform.id !== action.payload.id
      );
    },
  },
});

export const { addPlatform, deletePlatform } = PlatformSlice.actions;
export default PlatformSlice.reducer;
