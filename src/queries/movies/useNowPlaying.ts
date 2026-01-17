import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services/movies";
import { movieKeys } from "./keys";

export const useNowPlayingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: movieKeys.nowPlaying(page),
    queryFn: () => getNowPlayingMovies(page),
  });
};
