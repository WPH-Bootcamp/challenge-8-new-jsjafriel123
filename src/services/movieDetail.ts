import { apiClient } from "../lib/apiClient";

export const getMovieDetail = async (movieId: number | undefined) => {
  const res = await apiClient.get(`/movie/${movieId}`);
  return res.data;
};

export const getMovieCredits = async (movieId: number | undefined) => {
  const res = await apiClient.get(`/movie/${movieId}/credits`);
  return res.data;
};
