import { Status } from "./types";

export interface CharactersDataState {
  characters: any[];
  limit: number;
  total: number;
  attributionHTML: string;
  status?: Status;
  error?: string | null;
}

export interface CharacterDetailDataState {
  detail: any[];
  comics: any[];
  series: any[];
  stories: any[];
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

export interface CharacterDetailApiResponse {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbnailProps;
  resourceURI: string;
  comics: CharacterComicProps;
  series: {};
  stories: {};
  events: {};
  urls: [];
  status?: Status;
  error?: string | null;
}

interface CharacterComicProps {
  available: number;
  collectionURI: string;
  items: [];
  returned: number;
}

export interface CharacterRequestProps {
  id: number;
  limit: number;
}

interface ThumbnailProps {
  path: string;
  extension: string;
}
