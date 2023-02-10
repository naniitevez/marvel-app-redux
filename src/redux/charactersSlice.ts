import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../api/client";
import { ApiResponse, CharactersDataState } from "../types/characters";
import { RootState } from "./store";

const initialState: CharactersDataState = {
  characters: [],
  orderByModified: [],
  limit: 0,
  total: 0,
  attributionHTML: "",
  status: "idle",
  error: null,
};

export const getCharacters = createAsyncThunk<ApiResponse, number>(
  "characters/getCharacters",
  async (offset) => {
    const response = await apiClient.getCharacters(offset);
    return response;
  }
);

export const getCharacterByOrder = createAsyncThunk<ApiResponse>(
  "characters/getCharacterByOrder",
  async () => {
    const response = await apiClient.getCharacters( 0, 'modified');
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
      })
      .addCase(getCharacterByOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCharacterByOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacterByOrder.fulfilled, (state, action) => {
        state.status = "succeced";
        state.orderByModified = action.payload.data.results;
        state.attributionHTML = action.payload.attributionHTML;
      });
  },
});

export const getAllCharactersState = (state: RootState) => state.characters;

export default charactersSlice.reducer;
