import axios, { AxiosInstance } from "axios";
import { MD5 } from "crypto-js";
import { ITEM_LIMIT, PRIVATE_KEY, PUBLIC_KEY } from "./constants";
import {
  CharacterApiResponse,
  ComicApiResponse,
  SerieApiResponse,
} from "./models/response/models";

const axiosClient = axios.create({
  // URL para variable de entorno
  baseURL: "https://gateway.marvel.com/v1/public",
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error("error", error);
    return Promise.reject(error.response.data.errors[0]);
  }
);

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
class ApiClient {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getCharacters = async (
    offset: number = 0,
    orderBy: string = "name"
  ): Promise<CharacterApiResponse> => {
    const response = await this.client.get(
      `/characters?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}&orderBy=${orderBy}`
    );
    return response.data;
  };

  getCharacterById = async (id: number): Promise<CharacterApiResponse> => {
    const response = await this.client.get(`/characters/${id}?${AUTH_PARAMS}`);
    return response.data;
  };

  getComics = async (offset: number = 0): Promise<ComicApiResponse> => {
    const response = await this.client.get(
      `/comics?${AUTH_PARAMS}&limit=${ITEM_LIMIT}&offset=${offset}`
    );
    return response.data;
  };

  getComicById = async (id: number): Promise<ComicApiResponse> => {
    const response = await this.client.get(`/comics/${id}?${AUTH_PARAMS}`);
    return response.data;
  };

  getComicsByCharacterId = async (
    characterId: number,
    limit: number
  ): Promise<ComicApiResponse> => {
    const response = await this.client.get(
      `/comics?characters=${characterId}&${AUTH_PARAMS}&limit=${limit}`
    );
    return response.data;
  };

  getSeriesByCharacterId = async (
    characterId: number,
    limit: number
  ): Promise<SerieApiResponse> => {
    const response = await this.client.get(
      `/series?characters=${characterId}&${AUTH_PARAMS}&limit=${limit}`
    );
    return response.data;
  };
}

const apiClient = new ApiClient(axiosClient);

export default apiClient;
