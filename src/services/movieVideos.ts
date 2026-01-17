import { apiClient } from "../lib/apiClient";
import type { MovieVideoResponse } from "../types/video";

export const getMovieVideos = async (
  movieId: number
): Promise<MovieVideoResponse> => {
  const response = await apiClient.get<MovieVideoResponse>(
    `/movie/${movieId}/videos`
  );
  return response.data;
};
