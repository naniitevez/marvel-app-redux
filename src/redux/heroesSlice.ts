import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeroesDataState } from "../types/heroes";
import { getAllHeroes } from "../utils/utils";
import { RootState } from "./store";

const initialState: HeroesDataState = {
  heroes: [],
  status: "idle",
  error: null,
};

export const fetchHeroes = createAsyncThunk<any>(
  "hero/fetchHeroes",
  async () => {
    const response = await getAllHeroes();
    return response;
  }
);

export const heroesSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchHeroes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.status = "succeced";
        // state.heroes = action.payload;
      });
  },
});

export const getHeroes = (state: RootState) => state.heroes;

export default heroesSlice.reducer;
