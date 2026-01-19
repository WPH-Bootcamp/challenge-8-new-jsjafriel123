import { useRef } from "react";
import { usePopularMovieInvinite } from "../../queries/movies/usePopularMovieInvinite";
import MovieCard from "../UI/MovieCard";

export default function TrendingNow() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePopularMovieInvinite(); // 1 page of data READ
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const popularMovies = data?.pages ?? [];

  //   console.log("Popular Movies Data:", popularMovies);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    let scrollAmount = 193;

    if (window.innerWidth >= 1024) {
      // Large screens
      scrollAmount = 236; // poster width + gap for large screens
    }
    // console.log("Scroll Amount:", scrollAmount);

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  //  Get more data when scrolling near the end

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    let threshold = 193; // px before the end
    if (window.innerWidth >= 1024) {
      // Large screens
      threshold = 236; // poster width + gap for large screens
    }
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - threshold) {
      fetchNextPage();
    }
  };

  return (
    <section
      id="trending"
      className="flex flex-col items-center gap-6 px-4 pb-[20px] w-screen h-[534px] lg:w-screen lg:h-[630px] lg:gap-10 lg:px-[140px] "
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center relative w-[380px] h-full gap-10 lg:w-[1285px]">
        <h2 className="w-[361px] lg:w-[1160px] ">Trending Now</h2>

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex flex-row gap-5 w-[366px] h-[396px] lg:w-[1160px] lg:h-[460px] overflow-x-hidden overflow-y-hidden scroll-smooth scrollbar-hide"
        >
          {popularMovies?.map((page) =>
            page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}
        </div>
        {isFetchingNextPage && (
          <div className="shrink-0 w-[173px] flex items-center justify-center">
            Loading...
          </div>
        )}
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          type="button"
          aria-label="Scroll Right"
          className="absolute left-0 z-40 rounded-full focus-visible:ring-1 ring-offset-1 focus-visible:ring-gray-500 border-2 border-transparent hover:border-gray-800 ease-in-out"
        >
          <img
            src="/assets/Icon-Left.svg"
            alt=""
            className="size-11 lg:size-14"
          />
        </button>
        <button
          onClick={() => scroll("right")}
          type="button"
          aria-label="Scroll Left"
          className="absolute right-0 z-40 rounded-full focus-visible:ring-1 ring-offset-1 focus-visible:ring-gray-500 border-2 border-transparent hover:border-gray-800 ease-in-out"
        >
          <img
            src="/assets/Icon-Right.svg"
            alt=""
            className="size-11 lg:size-14"
          />
        </button>
      </div>
    </section>
  );
}
