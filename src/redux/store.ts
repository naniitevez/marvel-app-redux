import { configureStore } from "@reduxjs/toolkit";
import { comicsSlice } from "./comicsSlice";
import { charactersSlice } from "./charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    comics: comicsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
