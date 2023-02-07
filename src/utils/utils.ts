import { MD5 } from "crypto-js";
import { ApiResponse } from "../types/heroes";
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

export const fetchCharacters = async (offset: number): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/characters?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}`
  );
  return response.data;
};

export const getCharacter = async (id: number): Promise<ApiResponse> => {
  const response = await apiClient.get(`/characters/${id}?${AUTH_PARAMS}`);
  return response.data;
};

export const fetchComics = async (offset: number): Promise<ApiResponse> => {
  const response = await apiClient.get(
    `/comics?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}`
  );
  return response.data;
};

export const getComic = async (id: number): Promise<ApiResponse> => {
  const response = await apiClient.get(`/comics/${id}?${AUTH_PARAMS}`);
  return response.data;
};
