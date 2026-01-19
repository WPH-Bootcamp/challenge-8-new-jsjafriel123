import { BASE_URL } from "../../constants/api";
import type { Movie } from "../../types/movie";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <article
      key={movie.id}
      className="flex flex-col shrink-0 w-[173px] h-[334px] lg:w-[216px] lg:h-[397px] bg-black"
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `${BASE_URL.image}${movie.poster_path}`
              : "/assets/placeholder-portrait.svg"
          }
          alt={movie.title}
          className="rounded-xl w-[173px] h-[266px] object-cover lg:w-[216px] lg:h-[321px] "
        />
        <h3 className="px-1 text-[16px]/[30px] font-semibold lg:text-[18px]/[32px]">
          {movie.title}
        </h3>
        <div className="flex items-center w-full gap-1 px-1">
          <img
            src="/assets/Icon-Star.svg"
            alt="Star Icon"
            className="size-4.5 lg:size-5"
          />
          <span className="text-[16px]/[30px] lg:text-[18px]/[32px]">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default MovieCard;
