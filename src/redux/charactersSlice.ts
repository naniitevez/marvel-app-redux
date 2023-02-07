import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, CharactersDataState } from "../types/characters";
import { fetchCharacters } from "../utils/utils";
import { RootState } from "./store";

const initialState: CharactersDataState = {
  characters: [],
  characterDetail: [],
  limit: 0,
  total: 0,
  attributionHTML: "",
  status: "idle",
  error: null,
};

export const getCharacters = createAsyncThunk<ApiResponse, number>(
  "characters/getCharacters",
  async (offset) => {
    const response = await fetchCharacters(offset);
    return response;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.status = "succeced";
        state.characters = action.payload.data.results;
        state.limit = action.payload.data.limit;
        state.total = action.payload.data.total;
        state.attributionHTML = action.payload.attributionHTML;
      });
  },
});

export const getAllCharactersState = (state: RootState) => state.characters;

export default charactersSlice.reducer;
