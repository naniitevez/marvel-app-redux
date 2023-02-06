import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, HeroesDataState } from "../types/heroes";
import { fetchCharacters, fetchComics, getCharacter } from "../utils/utils";
import { RootState } from "./store";

const initialState: HeroesDataState = {
  heroes: [],
  limit: 0,
  total: 0,
  attributionHTML: "",
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

export const getHeroDetail = createAsyncThunk<ApiResponse, number>(
  "hero/getHeroDetail",
  async (id) => {
    const response = await getCharacter(id);
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
        state.limit = action.payload.data.limit;
        state.total = action.payload.data.total;
        state.attributionHTML = action.payload.attributionHTML;
      })
      .addCase(getHeroDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getHeroDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getHeroDetail.fulfilled, (state, action) => {
        state.status = "succeced";
        state.heroes = action.payload.data.results;
      });
  },
});

export const getHeroes = (state: RootState) => state.heroes;

export default heroesSlice.reducer;
