import { useEffect, useState } from "react";
import { useTopRatedMovies } from "../../queries/movies/useTopRated";
import { useMovieVideos } from "../../queries/movies/useMovieVideos";
import { TrailerModal } from "../UI/TrailerModal";
import { BASE_URL } from "../../constants/api";

const SLIDE_INTERVAL = 5000; // 5 seconds

export default function HeroSlider() {
  const { data, isLoading, isError } = useTopRatedMovies(1); // 1 page of data READ
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const movies = data?.results ?? [];

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      if (!isPaused && !isTrailerOpen) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [movies.length, isPaused, isTrailerOpen]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError || movies.length === 0) {
    return <div>Error loading movies...</div>;
  }

  const activeMovie = movies[activeIndex];

  const { data: videoData } = useMovieVideos(activeMovie.id);
  const hasTrailer = videoData?.results?.some(
    (v) => v.type === "Trailer" && v.site === "YouTube"
  );
  const trailer = videoData?.results.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );
  return (
    <>
      <section
        id="hero"
        className="flex justify-center w-full h-[600px] relative lg:h-[763px] bg-black/40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* <!-- Hero Text + Button --> */}
        <div
          id="hero-image"
          className="flex relative h-[398px] items-start overflow-hidden w-screen lg:h-[763px]"
        >
          <img
            src={`${BASE_URL.image}${activeMovie.backdrop_path}`}
            alt={activeMovie.title}
            className="size-full object-cover object-top absolute inset-0 object-cover bg-black/40 transition-opacity duration-700"
          />
          <div className="absolute bottom-0 w-full h-14 lg:h-19  bg-linear-to-t from-black to-black/0 z-10"></div>
        </div>

        <div
          id="hero-text"
          className="flex flex-col justify-between absolute top-[223px] w-90.25 h-[346px] lg:w-[635px] lg:h-[326px] gap-6 px-4 text-left lg:top-74.5 lg:left-40 z-20"
        >
          <h1 className="font-bold text-[#FDFDFD] text-[24px]/[36px] lg:text-[48px]/[60px] text-shadow-[2px_2px_6px_rgba(0,0,0,0.5)]">
            {activeMovie.title}
          </h1>
          <p className="overflow-y-auto overflow-x-hidden h-[158px] text-[14px]/[28px] font-normal text-shadow-black/50 text-[#A4A7AE] lg:h-[166px] lg:text-[16px]/[30px] text-shadow-[1px_1px_2px_rgba(0,0,0,0)]">
            {activeMovie.overview}
          </p>
          {/* Buttons */}
          <div className="flex flex-col items-center justify-center w-auto h-[104px] gap-4 lg:flex-row lg:items-center lg:justify-between lg:w-[476px] lg:h-[52px]">
            {/* Button Play */}

            <a
              className={`${
                hasTrailer ? "inline-flex" : "hidden"
              } w-90.25 h-11 gap-2 rounded-full bg-[#961200] text-white items-center justify-center lg:w-57.5 lg:h-13 cursor-pointer`}
              onClick={() => setIsTrailerOpen(true)}
            >
              <span>Watch Trailer</span>
              <img
                src="\assets\Icon-Play.svg"
                alt="Play"
                className="size-[18px] lg:size-[24px]"
              />
            </a>
            {/* Button Detail */}
            <a
              href="/DetailPage"
              className="flex items-center justify-center h-11 lg:h-13"
            >
              See Detail
            </a>
          </div>
        </div>
      </section>
      {isTrailerOpen && trailer && (
        <TrailerModal
          videoKey={trailer.key}
          onClose={() => setIsTrailerOpen(false)}
        />
      )}
    </>
  );
}
