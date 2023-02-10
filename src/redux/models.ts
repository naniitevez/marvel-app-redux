import { CharacterResult, ComicResult, SerieResult } from "../api/models/response/models";

export interface CharactersDataState {
  characters: CharacterResult[];
  orderByModified: CharacterResult[];
  limit: number;
  total: number;
  attributionHTML: string;
  status?: Status;
  error?: string | null;
}

export interface CharacterDetailDataState {
  detail: CharacterResult[];
  comics: ComicResult[];
  series: SerieResult[];
  status?: Status;
  error?: string | null;
}

export interface ComicsDataState {
  comics: ComicResult[];
  comicDetail: ComicResult[];
  limit: number;
  total: number;
  status?: Status;
  error?: string | null;
}

export type Status = "idle" | "loading" | "failed" | "succeced";
