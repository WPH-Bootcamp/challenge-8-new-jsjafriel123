import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../../services/movieDetail";
import { getMovieCredits } from "../../services/movieDetail";

export const useMovieDetail = (movieId?: number) => {
  return useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetail(movieId),
    enabled: !!movieId, // only fetch when movieId exists
  });
};

export const useMovieCredits = (movieId: number) => {
  return useQuery({
    queryKey: ["movie", movieId, "credits"],
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
  });
};
