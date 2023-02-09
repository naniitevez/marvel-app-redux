import { ThumbnailProps } from "./characters";
import { Status } from "./types";

export interface ComicsDataState {
  comics: any[];
  comicDetail: any[];
  limit: number;
  total: number;
  status?: Status;
  error?: string | null;
}

export interface ComicDetailApiResponse {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: [];
  resourceURI: string;
  urls: [];
  series: [];
  variants: [];
  collections: [];
  collectedIssues: [];
  dates: [];
  prices: PriceProps[];
  thumbnail: ThumbnailProps;
  images: [];
  creators: ComicAuthorProps;
  characters: {};
  stories: {};
  events: {};
}

export interface ComicsProps {
  available: number;
  collectionURI: string;
  items: [];
  returned: number;
}

export interface ComicAuthorProps {
  available: number;
  collectionURI: string;
  items: AuthorProps[];
  returned: number;
}

export interface AuthorProps {
  name: string;
  resourseURI: string;
  role: string;
}

export interface PriceProps {
  price: number;
  type: string;
}