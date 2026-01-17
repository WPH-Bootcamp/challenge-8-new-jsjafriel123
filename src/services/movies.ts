import { apiClient } from "../lib/apiClient";
import type { MovieListResponse } from "../types/movie";
/**
 * Now Playing Movies
 */
export const getNowPlayingMovies = async (
  page = 1
): Promise<MovieListResponse> => {
  const response = await apiClient.get<MovieListResponse>(
    "/movie/now_playing",
    {
      params: { page },
    }
  );
  return response.data;
};
/**
 * Popular Movies
 */
export const getPopularMovies = async (
  page = 1
): Promise<MovieListResponse> => {
  const response = await apiClient.get<MovieListResponse>("/movie/popular", {
    params: { page },
  });

  return response.data;
};

/**
 * Top Rated Movies
 */
export const getTopRatedMovies = async (
  page = 1
): Promise<MovieListResponse> => {
  const response = await apiClient.get<MovieListResponse>("/movie/top_rated", {
    params: { page },
  });

  return response.data;
};

// export const getMovieDetails = async (movieId: number) => {
//     const response = await apiClient.get(`/movie/${movieId}`);
//     return response.data;
// };
// export const getMovieCredits = async (movieId: number) => {
//     const response = await apiClient.get(`/movie/${movieId}/credits`);
//     return response.data;
// };
