import { configureStore } from "@reduxjs/toolkit";
import { comicsSlice } from "./comicsSlice";
import { heroesSlice } from "./heroesSlice";

export const store = configureStore({
  reducer: {
    heroes: heroesSlice.reducer,
    comics: comicsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
