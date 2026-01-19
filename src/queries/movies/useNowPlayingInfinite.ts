import { useInfiniteQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "../../services/movies";

export const useNowPlayingInfinite = () => {
  return useInfiniteQuery({
    queryKey: ["movies", "now-playing"],
    initialPageParam: 1,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getNowPlayingMovies(pageParam),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
