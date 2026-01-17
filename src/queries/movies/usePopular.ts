import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/movies";
import { movieKeys } from "./keys";

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: movieKeys.popular(page),
    queryFn: () => getPopularMovies(page),
  });
};
