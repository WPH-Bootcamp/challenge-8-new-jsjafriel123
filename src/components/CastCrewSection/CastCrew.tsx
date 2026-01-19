import { useMovieCredits } from "../../queries/movies/useMovieDetail";
import { toast } from "sonner";
import { useEffect } from "react";
import type { Profile, Cast, Crew } from "../../types/movie";
import ProfileCard from "../UI/ProfileCard";

const CastCrew = ({ movieId }: { movieId: number }) => {
  const { data, isLoading, isError } = useMovieCredits(movieId);

  if (isLoading) {
    return <div>Loading Cast & Crew...</div>;
  }

  useEffect(() => {
    if (isError) {
      toast.error("Failed to load cast & crew");
    }
  }, [isError]);

  if (isLoading) {
    return <div className="p-6 text-center">Loading movie...</div>;
  }

  if (!data) return null;
  // Assuming Profile and Cast interfaces are already defined
  const movieCast: Profile[] = (data?.cast || []).map(
    (Member: Cast): Profile => ({
      cast: true,
      id: Member.id,
      adult: Member.adult,
      gender: Member.gender,
      known_for_department: Member.known_for_department,
      name: Member.name,
      original_name: Member.original_name,
      popularity: Member.popularity,
      profile_path: Member.profile_path,
      character_job: Member.character, // Mapping character to character_job
      credit_id: Member.credit_id,
    })
  );
  const movieCrew: Profile[] = (data?.crew || []).map(
    (Member: Crew): Profile => ({
      cast: false,
      id: Member.id,
      adult: Member.adult,
      gender: Member.gender,
      known_for_department: Member.known_for_department,
      name: Member.name,
      original_name: Member.original_name,
      popularity: Member.popularity,
      profile_path: Member.profile_path,
      character_job: Member.job, // Mapping character to character_job
      credit_id: Member.credit_id,
    })
  );

  const movieCredits: Profile[] = [...movieCast, ...movieCrew];

  // console.log("Movie Credits:", movieCredits);

  return (
    <div className="flex flex-col w-[361px] h-[534px] gap-4 lg:gap-6 lg:w-full lg:h-[308px]">
      <h2 className="lg:h-[46px] ">Cast & Crew</h2>
      {isLoading && <p className="text-center">Loading cast...</p>}

      <div className="grid grid-cols-1 w-[361px] max-h-[484px] gap-4 overflow-y-auto lg:w-full lg:h-[248px] lg:grid-cols-3 ">
        {movieCredits?.map((member: Profile) => (
          <ProfileCard key={member.id} profile={member} />
        ))}
      </div>
    </div>
  );
};

export default CastCrew;
