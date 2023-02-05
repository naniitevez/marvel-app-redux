import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, HeroesDataState } from "../types/heroes";
import { fetchCharacters } from "../utils/utils";
import { RootState } from "./store";

const initialState: HeroesDataState = {
  heroes: [],
  offset: 0,
  count: 0,
  limit: 0,
  total: 0,
  attributionHTML: '',
  status: "idle",
  error: null,
};

export const fetchHeroes = createAsyncThunk<ApiResponse, number>(
  "hero/fetchHeroes",
  async (offset) => {
    const response = await fetchCharacters(offset);
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
        console.log("PAYLOAD", action.payload)
        state.count = action.payload.data.count;
        state.limit = action.payload.data.limit;
        state.total = action.payload.data.total;
        state.attributionHTML = action.payload.attributionHTML;
      });
  },
});

export const getHeroes = (state: RootState) => state.heroes;

export default heroesSlice.reducer;
