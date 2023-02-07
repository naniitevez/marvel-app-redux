import { Status } from "./types";

export interface CharactersDataState {
  characters: any[];
  characterDetail: any[];
  limit: number;
  total: number;
  attributionHTML: string;
  status?: Status;
  error?: string | null;
}

export interface CharacterDetail {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  comics: {};
  status?: Status;
  error?: string | null;
}

export interface CardProps {
  isComic: boolean;
  name: string;
  image: string;
  id: number;
  price?: number;
}

export interface ApiResponse {
  code: number;
  status: string;
  data: ApiDataResponse;
  etag: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
}

export interface ApiDataResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: [];
}

export interface DetailApiResponse {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {};
  resourceURI: string;
  comics: {};
  series: {};
  stories: {};
  events: {};
  urls: [];
  status?: Status;
  error?: string | null;
}