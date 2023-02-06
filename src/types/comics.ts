import { Status } from "./types";

export interface ComicsDataState {
  comics: any[];
  limit: number;
  total: number;
  status?: Status;
  error?: string | null;
}
