import { BASE_URL } from "../../constants/api";
import type { Profile } from "../../types/movie";

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <article className="flex flex-row items-center w-full h-[84px] gap-3 lg:w-[360px] lg:h-[104px] gap-4 ">
      <img
        src={
          profile.profile_path
            ? `${BASE_URL.image}${profile.profile_path}`
            : "/assets/placeholder-Profile.svg"
        }
        alt={profile.name}
        className="w-[55px] h-[84px] lg:w-[69px] lg:h-[104px] "
      />
      <div className="flex-col w-[294px] h-[56px] ">
        <p className="text-[14px]/[28px] font-semibold lg:text-[16px]/[30px] ">
          {profile.name}
        </p>
        <p className="text-[14px]/[28px] lg:text-[16px]/[30px] ">
          {profile.character_job}
        </p>
      </div>
    </article>
  );
};

export default ProfileCard;
