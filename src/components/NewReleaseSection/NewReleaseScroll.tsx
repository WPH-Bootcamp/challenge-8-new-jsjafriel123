import { useNowPlayingInfinite } from "../../queries/movies/useNowPlayingInfinite";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import MovieCard from "../UI/MovieCard";

export default function NewRelease() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useNowPlayingInfinite();

  const loadMoreRef = useInfiniteScroll(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  });

  if (status === "pending") {
    return <p>Loading now playing…</p>;
  }

  if (status === "error") {
    return <p>Failed to load movies</p>;
  }

  return (
    <section
      id="newrelease"
      className="flex flex-col items-center gap-6 px-[16px] pb-[10px] w-screen h-[1532px] lg:w-screen lg:h-[1359px] lg:gap-10 lg:px-[140px] lg:pb-0"
    >
      <div className="flex flex-col items-center w-[380px] h-full gap-10 lg:w-[1285px] ">
        <h2 className="w-[361px] lg:w-[1160px] ">New Release</h2>

        <div className="relative grid grid-cols-2 overflow-y-auto gap-5 w-[381px] h-full lg:w-[1180px] lg:h-full lg:grid-cols-5 ">
          {/* CARD CONTAINER */}
          {data?.pages.map((page) =>
            page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}

          {/* Gradient Box */}
          <div className="absolute bottom-0 w-full h-[334px] lg:h-[397px] bg-linear-to-t from-black to-black/0 z-10"></div>
          {/* Intersection Observer target */}
          <div ref={loadMoreRef} className="h-1 col-span-full " />
        </div>
      </div>

      {isFetchingNextPage && (
        <p className="text-center mt-4 text-sm opacity-70">Loading more…</p>
      )}
    </section>
  );
}
