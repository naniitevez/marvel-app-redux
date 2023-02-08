import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, CharacterRequestProps, CharacterDetailDataState } from "../types/characters";
import { fetchCharacterComics, fetchCharacterDetail, fetchCharacterSeries, fetchCharacterStories } from "../utils/utils";
import { RootState } from "./store";

const initialState: CharacterDetailDataState = {
  detail: [],
  comics: [],
  series: [],
  stories: [],
  status: "idle",
  error: null,
};

export const getCharacterDetail = createAsyncThunk<ApiResponse, number>(
  "charactersDetail/getCharacterDetail",
  async (id) => {
    const response = await fetchCharacterDetail(id);
    return response;
  }
);

export const getCharacterComics = createAsyncThunk<ApiResponse, CharacterRequestProps>(
  "charactersDetail/getCharacterComics",
  async ({id, limit}) => {
    const response = await fetchCharacterComics(id, limit);
    return response;
  }
);

export const getCharacterSeries = createAsyncThunk<ApiResponse, CharacterRequestProps>(
  "charactersDetail/getCharacterSeries",
  async ({id, limit}) => {
    const response = await fetchCharacterSeries(id, limit);
    return response;
  }
);

export const getCharacterStories = createAsyncThunk<ApiResponse, CharacterRequestProps>(
  "charactersDetail/getCharacterStories",
  async ({id, limit}) => {
    const response = await fetchCharacterStories(id, limit);
    return response;
  }
);

export const characterDetailSlice = createSlice({
  name: "charactersDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCharacterDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacterDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacterDetail.fulfilled, (state, action) => {
        state.status = "succeced";
        state.detail = action.payload.data.results;
      })
      .addCase(getCharacterComics.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacterComics.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacterComics.fulfilled, (state, action) => {
        state.status = "succeced";
        state.comics = action.payload.data.results;
      })
      .addCase(getCharacterSeries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacterSeries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacterSeries.fulfilled, (state, action) => {
        state.status = "succeced";
        state.series = action.payload.data.results;
      })
      .addCase(getCharacterStories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacterStories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacterStories.fulfilled, (state, action) => {
        state.status = "succeced";
        state.stories = action.payload.data.results;
      });
  },
});

export const getCharacterDetailState = (state: RootState) =>
  state.characterDetail;
export default characterDetailSlice.reducer;
