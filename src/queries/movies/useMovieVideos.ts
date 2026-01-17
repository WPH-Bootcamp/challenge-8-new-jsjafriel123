import { useQuery } from "@tanstack/react-query";
import { getMovieVideos } from "../../services/movieVideos";
import type { MovieVideoResponse } from "../../types/video";

export const useMovieVideos = (movieId?: number) => {
  return useQuery<MovieVideoResponse>({
    queryKey: ["movie", movieId, "videos"],
    queryFn: () => getMovieVideos(movieId!),
    enabled: !!movieId, // only fetch when movie exists
  });
};
