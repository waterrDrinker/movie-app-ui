export interface Product {
  id: string;
  isTop?: boolean;
  title: string;
  subtitle?: string;
  desc?: string;
  score: string | null;
  seasons?: string;
  images:
    | string
    | {
        poster: string;
        hero?: string;
        title?: string;
        screens?: {
          screenUrl: string;
          episodeOrder: string;
          duration: string;
        }[];
      };
  releaseDate?: string;
  genre?: string;
  country?: string;
  ageRestriction?: string;
  originalTitle?: string;
  worldPremier?: string;
  genres?: string[];
  audioLanguages?: string[];
  quality?: string[] | string;
  similarIds?: string[];
  isContentSensetive?: boolean
};