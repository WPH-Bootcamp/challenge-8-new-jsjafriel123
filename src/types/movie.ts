export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  genre_ids: number[];
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
}
export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
export type MovieListResponse = PaginatedResponse<Movie>; // Generic paginated response for a list of movies
