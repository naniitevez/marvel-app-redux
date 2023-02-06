import { MD5 } from "crypto-js";
import { ApiResponse } from "../types/heroes";
import { CHARACTERS_URL, COMICS_URL, PRIVATE_KEY, PUBLIC_KEY } from "./constants";

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
  const limit = 20;
  const url = `${CHARACTERS_URL}?limit=${limit}&offset=${offset}&${AUTH_PARAMS}`;

  let response = await fetch(url);
  let data = await response.json();

  return data;
};

export const getCharacter = async (id: number): Promise<ApiResponse> => {
  const url = `${CHARACTERS_URL}/${id}?${AUTH_PARAMS}`;

  let response = await fetch(url);
  let data = await response.json();

  return data;
};

export const fetchComics = async (offset: number): Promise<ApiResponse> => {
  const limit = 20;
  const url = `${COMICS_URL}?limit=${limit}&offset=${offset}&${AUTH_PARAMS}`;

  let response = await fetch(url);
  let data = await response.json();

  return data;
};
