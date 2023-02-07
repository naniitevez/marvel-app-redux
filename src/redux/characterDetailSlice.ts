import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, CharacterDetailDataState } from "../types/characters";
import { fetchCharacterDetail } from "../utils/utils";
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
  "characters/getCharacterDetail",
  async (id) => {
    const response = await fetchCharacterDetail(id);
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
      });
  },
});

export const getCharacterDetailState = (state: RootState) => state.characterDetail;
export default characterDetailSlice.reducer;
