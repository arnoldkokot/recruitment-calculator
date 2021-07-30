import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "selectedExams",
  initialState: {
    value: ["Matematyka podstawowa"],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
  },
});

export const { add, remove } = counterSlice.actions;

export default counterSlice.reducer;
