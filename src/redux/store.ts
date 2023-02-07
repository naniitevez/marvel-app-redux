import { configureStore } from "@reduxjs/toolkit";
import { comicsSlice } from "./comicsSlice";
import { charactersSlice } from "./charactersSlice";
import { characterDetailSlice } from "./characterDetailSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    comics: comicsSlice.reducer,
    characterDetail: characterDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
