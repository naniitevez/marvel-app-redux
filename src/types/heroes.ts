import { Status } from "./types";

export interface HeroesDataState {
  heroes: [];
  status?: Status;
  error?: string | null;
}

export interface Hero {
  name: string;
  image: string;
}
