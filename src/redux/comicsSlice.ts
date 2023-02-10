import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import apiClient from "../api/client";
import { ComicApiResponse } from "../api/models/response/models";
import { ComicsDataState } from "./models";

const initialState: ComicsDataState = {
  comics: [],
  comicDetail: [],
  limit: 0,
  total: 0,
  status: "idle",
  error: null,
};

export const getComics = createAsyncThunk<ComicApiResponse, number>(
  "comics/getComics",
  async (offset) => {
    const response = await apiClient.getComics(offset);
    return response;
  }
);

export const getComicDetail = createAsyncThunk<ComicApiResponse, number>(
  "comics/getComicDetail",
  async (id) => {
    const response = await apiClient.getComicById(id);
    return response;
  }
);

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getComics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComics.fulfilled, (state, action) => {
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

export const getAllComicsState = (state: RootState) => state.comics;

export default comicsSlice.reducer;
