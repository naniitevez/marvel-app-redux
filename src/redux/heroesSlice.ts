import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HeroesDataState } from "../types/heroes";
import { fetchData } from "../utils/utils";
import { RootState } from "./store";

const initialState: HeroesDataState = {
  heroes: [],
  offset: 0,
  count: 0,
  attributionHTML: '',
  status: "idle",
  error: null,
};

export const fetchHeroes = createAsyncThunk<any, number>(
  "hero/fetchHeroes",
  async (limit) => {
    const response = await fetchData(limit);
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
        state.heroes = action.payload.data.results;
        state.count = action.payload.data.count;
        state.attributionHTML = action.payload.attributionHTML;
      });
  },
});

export const getHeroes = (state: RootState) => state.heroes;

export default heroesSlice.reducer;
