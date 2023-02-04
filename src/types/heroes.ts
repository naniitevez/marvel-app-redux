import { Status } from "./types";

export interface HeroesDataState {
  heroes: [];
  offset: number;
  count: number;
  attributionHTML: string;
  status?: Status;
  error?: string | null;
}

export interface HeroeCardProps {
  name: string;
  image: string;
}