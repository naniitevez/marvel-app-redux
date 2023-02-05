import { Status } from "./types";

export interface HeroesDataState {
  heroes: any[];
  offset: number;
  count: number;
  limit: number;
  total: number;
  attributionHTML: string;
  status?: Status;
  error?: string | null;
}
export interface HeroeCardProps {
  name: string;
  image: string;
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
