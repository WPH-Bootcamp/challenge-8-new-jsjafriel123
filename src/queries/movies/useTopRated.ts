import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovies } from "../../services/movies";
import { movieKeys } from "./keys";

export const useTopRatedMovies = (page: number = 1) => {
  return useQuery({
    queryKey: movieKeys.topRated(page),
    queryFn: () => getTopRatedMovies(page),
  });
};
