import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const PlatformSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlaform: (state, action) => {
      state.value.push(action.payload);
    },
    deletePlatform: (state, action) => {
      state.value = state.value.filter(
        (platform) => platform.id !== action.payload.id
      );
    },
  },
});

export const { addPlaform, deletePlatform } = PlatformSlice.actions;
export default PlatformSlice.reducer;
