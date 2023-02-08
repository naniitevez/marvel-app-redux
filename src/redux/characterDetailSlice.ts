import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, CharacterComicRequestProps, CharacterDetailDataState } from "../types/characters";
import { fetchCharacterComics, fetchCharacterDetail } from "../utils/utils";
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

export const getCharacterComics = createAsyncThunk<ApiResponse, CharacterComicRequestProps>(
  "charactersDetail/getCharacterComics",
  async ({id, limit}) => {
    const response = await fetchCharacterComics(id, limit);
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
      });
  },
});

export const getCharacterDetailState = (state: RootState) =>
  state.characterDetail;
export default characterDetailSlice.reducer;
