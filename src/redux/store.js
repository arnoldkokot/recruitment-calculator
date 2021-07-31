import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./active";

export const store = configureStore({
  reducer: {
    active: activeReducer,
  },
});
