import { MD5 } from "crypto-js";
import { ApiResponse } from "../types/characters";
import apiClient from "./client";
import { ITEM_LIMIT, PRIVATE_KEY, PUBLIC_KEY } from "./constants";

const getHash = (
  timestamp: string,
  privateKey: string,
  publicKey: string
): string => {
  return MD5(timestamp + privateKey + publicKey).toString();
};

const TIMESTAMP = Date.now().toString();
const HASH = getHash(TIMESTAMP, PRIVATE_KEY, PUBLIC_KEY);
const AUTH_PARAMS = `ts=${TIMESTAMP}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

const fetchCharactersOrderByModified = async (): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/characters?orderBy=modified&${AUTH_PARAMS}`
  );
  return response.data;
};

const fetchCharacters = async (offset: number): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/characters?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}`
  );
  return response.data;
};

const fetchCharacterDetail = async (
  id: number
): Promise<ApiResponse> => {
  const response = await apiClient.get(`/characters/${id}?${AUTH_PARAMS}`);
  return response.data;
};

const fetchComics = async (offset: number): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/comics?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}`
  );
  return response.data;
};

const fetchComicDetail = async (id: number): Promise<ApiResponse> => {
  const response = await apiClient.get(`/comics/${id}?${AUTH_PARAMS}`);
  return response.data;
};

const fetchCharacterComics = async (
  id: number,
  limit: number
): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/comics?characters=${id}&${AUTH_PARAMS}&limit=${limit}`
  );
  return response.data;
};

const fetchCharacterSeries = async (
  id: number,
  limit: number
): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/series?characters=${id}&${AUTH_PARAMS}&limit=${limit}`
  );
  return response.data;
};

export {
  fetchCharactersOrderByModified,
  fetchCharacters,
  fetchCharacterDetail,
  fetchComics,
  fetchComicDetail,
  fetchCharacterComics,
  fetchCharacterSeries
}