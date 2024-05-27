import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    recommendations: [],
  },
};

export const recommendationSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {
    updateRecommendation: (state, action) => {
      state.value.recommendations = action.payload;
    },
  },
});

export const { updateRecommendation } = recommendationSlice.actions;
export default recommendationSlice.reducer;
