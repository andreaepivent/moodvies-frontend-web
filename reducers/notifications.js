import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  boolean: true,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      if (!Array.isArray(state.value)) {
        return [];
      }
      state.value.push(action.payload);
    },
    removeNotification: (state, action) => {
      return {
        value: state.value.filter((_, index) => index !== action.payload),
      };
    },
    deleteNotification: (state, action) => {
      state.boolean = action.payload;
    },
  },
});

export const { addNotification, removeNotification, deleteNotification } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
