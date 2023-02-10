interface ApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
}

export interface CharacterApiResponse extends ApiResponse {
  data: CharacterData;
}

export interface ComicApiResponse extends ApiResponse {
  data: ComicData;
}

export interface SerieApiResponse extends ApiResponse {
  data: SerieData;
}

export interface CharacterData extends Data {
  results: CharacterResult[];
}

export interface ComicData extends Data {
  results: ComicResult[];
}

export interface SerieData extends Data {
  results: SerieResult[];
}

export interface CharacterResult {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbnailProps;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: UrlProps[];
}

export interface ComicResult {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: UrlProps[];
  series: Series;
  variants: VariantProps[];
  collections: any[];
  collectedIssues: CollectedIssue[];
  dates: Date[];
  prices: PriceProps[];
  thumbnail: ThumbnailProps;
  images: ImageProps[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

export interface SerieResult {
  id: number;
  title: string;
  description?: string;
  resourceURI: string;
  urls: UrlProps[];
  startYear: number;
  endYear: number;
  rating: string;
  type: string;
  modified: string;
  thumbnail: ThumbnailProps;
  creators: Creators;
  characters: Characters;
  stories: Stories;
  comics: Comics;
  events: Events;
  next?: Next;
  previous?: Previous;
}

interface ThumbnailProps {
  path: string;
  extension: string;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicProps[];
  returned: number;
}

interface ComicProps {
  resourceURI: string;
  name: string;
}

export interface Series {
  available: number;
  collectionURI: string;
  items: SerieProps[];
  returned: number;
}

interface SerieProps {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StorieProps[];
  returned: number;
}

interface StorieProps {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: EventProps[];
  returned: number;
}

interface EventProps {
  resourceURI: string;
  name: string;
}

interface UrlProps {
  type: string;
  url: string;
}

interface VariantProps {
  resourceURI: string;
  name: string;
}

interface PriceProps {
  type: string;
  price: number;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorProps[];
  returned: number;
}

interface CreatorProps {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: CharactersProps[];
  returned: number;
}

interface CharactersProps {
  resourceURI: string;
  name: string;
}

interface Next {
  resourceURI: string;
  name: string;
}

interface Previous {
  resourceURI: string;
  name: string;
}

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface CollectedIssue {
  resourceURI: string;
  name: string;
}

interface ImageProps {
  path: string;
  extension: string;
}
