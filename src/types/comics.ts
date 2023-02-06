import { Status } from "./types";

export interface ComicsDataState {
  comics: any[];
  comicDetail: any[];
  limit: number;
  total: number;
  status?: Status;
  error?: string | null;
}

export interface ComicsProps {
  available: number;
  collectionURI: string;
  items: [];
  returned: number;
}