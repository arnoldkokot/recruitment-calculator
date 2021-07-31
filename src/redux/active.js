import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "active",
  initialState: {
    value: [
      {
        name: "Matematyka podstawowa",
        hidden: false,
        score: 0,
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      state.value.push({
        name: action.payload,
        hidden: false,
        score: 0,
      });
    },
    remove: (state, action) => {
      const removeIndex = state.value.findIndex(
        subject => subject.name === action.payload
      );
      state.value.splice(removeIndex, 1);
    },
    changeScore: (state, action) => {
      const { name, newScore } = action.payload;
      const index = state.value.findIndex(subject => subject.name === name);
      state.value[index].score = newScore;
    },
    toggle: (state, action) => {
      const index = state.value.findIndex(
        subject => subject.name === action.payload
      );
      state.value[index].hidden = !state.value[index].hidden;
    },
  },
});

export const { add, remove, changeScore, toggle } = counterSlice.actions;

export default counterSlice.reducer;
