import { configureStore } from "@reduxjs/toolkit";
import examsReducer from "./selectedExams";

export const store = configureStore({
  reducer: {
    selectedExams: examsReducer,
  },
});
