import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../services/movies";

export const usePopularMovieInvinite = () => {
  return useInfiniteQuery({
    queryKey: ["popular-movies"],
    initialPageParam: 1,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      getPopularMovies(pageParam),

    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
