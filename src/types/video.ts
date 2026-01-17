export type VideoSite = "YouTube" | "Vimeo";

export type VideoType =
  | "Trailer"
  | "Teaser"
  | "Clip"
  | "Featurette"
  | "Behind the Scenes";

export interface Video {
  id: string;
  key: string;
  site: VideoSite;
  type: VideoType;
  name: string;
  official: boolean;
  size: number;
}

export interface MovieVideoResponse {
  id: number;
  results: Video[];
}
