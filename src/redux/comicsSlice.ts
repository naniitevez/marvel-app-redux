import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ComicsDataState } from "../types/comics";
import { ApiResponse } from "../types/heroes";
import { fetchComics, getComic } from "../utils/utils";
import { RootState } from "./store";

const initialState: ComicsDataState = {
  comics: [],
  comicDetail: [],
  limit: 0,
  total: 0,
  status: "idle",
  error: null,
};

export const fetchHeroComics = createAsyncThunk<ApiResponse, number>(
  "comic/fetchHeroComics",
  async (offset) => {
    const response = await fetchComics(offset);
    return response;
  }
);

export const getComicDetail = createAsyncThunk<ApiResponse, number>(
  "comic/getComicDetail",
  async (id) => {
    const response = await getComic(id);
    return response;
  }
);

export const comicsSlice = createSlice({
  name: "comic",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchHeroComics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchHeroComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeroComics.fulfilled, (state, action) => {
        state.status = "succeced";
        state.comics = action.payload.data.results;
        state.limit = action.payload.data.limit;
        state.total = action.payload.data.total;
      })
      .addCase(getComicDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getComicDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComicDetail.fulfilled, (state, action) => {
        state.status = "succeced";
        state.comicDetail = action.payload.data.results;
      });
  },
});

export const getHeroComics = (state: RootState) => state.comics;

export default comicsSlice.reducer;