import CastCrew from "../CastCrewSection/CastCrew";

const DetailContent = () => {
  return (
    <section
      id="detail"
      className="flex justify-center relative w-screen h-[1409px] lg:h-[1473px] "
    >
      {/* BACKGROUND IMAGE*/}
      <div
        id="hero-image"
        className="flex absolute top-0 h-98 items-start overflow-hidden w-screen lg:h-[1024px] z-0"
      >
        <img
          src="\assets\Hero-CaptainAmerica.svg"
          alt="Hero Image"
          className="size-full object-cover object-top"
        />
        <div className="absolute bottom-0 w-full h-[400px] lg:h-full  bg-linear-to-t from-black to-black/0 z-5 "></div>
      </div>

      {/* <!-- Hero Text + Button --> */}
      <div className="flex flex-col mt-[222px] w-[393px] gap-6 px-4 pb-10 h-[1187px] lg:gap-12 lg:mt-[412px] lg:w-[1160px] lg:h-[912px] z-20 ">
        {/* HEADER */}
        <div className="w-full h-[407px] lg:h-[384px] ">
          {/* GRID Container  */}
          <div className="grid grid-cols-[120px_1fr] auto-rows-min gap-2 lg:grid-cols-[265px_1fr] lg:gap-4 ">
            {/* Poster */}
            <div className="row-span-1 lg:row-span-5">
              <img
                src="\assets\Poster-CaptainAmerica.svg"
                alt="Poster"
                className="w-[116px] h-[171px] lg:w-[260px] lg:h-[384px] "
              />
            </div>
            {/* Title */}
            <div className="row-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex flex-col w-auto h-[100px] gap-1 lg:gap-6 lg:h-[102px]">
              <h1 className="font-bold text-[#FDFDFD] text-[20px]/[34px] lg:text-[40px]/[56px]">
                Captain America: Brave New World
              </h1>
              <p className="inline-flex gap-1 items-center">
                <img
                  src="\assets\Icon-Calendar.svg"
                  alt="Play"
                  className="size-[20px] lg:size-[24px]"
                />
                <span className="text-white text-[14px]/[28px] lg:text-[16px]/[30px]">
                  12 February 2025
                </span>
              </p>
            </div>
            {/* Button+Cards */}
            <div className="col-span-2 row-span-1 lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-3">
              <div
                id="detailheader"
                className="flex flex-col items-center w-auto h-[200px] lg:items-start lg:w-auto lg:h-[236px] gap-6 "
              >
                <div className="flex justify-between w-[361px] h-[44px] lg:w-[288px] lg:h-[52px]">
                  <a className="inline-flex w-[310px] h-[44px] gap-2 rounded-full bg-[#961200] text-white items-center justify-center lg:w-[220px] lg:h-[52px]">
                    <span>Watch Trailer</span>
                    <img
                      src="\assets\Icon-Play.svg"
                      alt="Play"
                      className="size-[18px] lg:size-[24px]"
                    />
                  </a>
                  <a
                    href="/FavoritePage"
                    className="flex items-center justify-center h-11 lg:h-13"
                  >
                    <img
                      src="\assets\Button-Heart.svg"
                      alt="Favorite"
                      className="size-[44px] lg:size-[52px]"
                    />
                  </a>
                </div>
                {/* Cards Container*/}
                <div className="flex flex-row justify-between w-[361px] h-[120px] lg:w-full lg:h-[146px] ">
                  {/* Card 1 */}
                  <div className="flex flex-col items-center w-[112.33px] h-[120px] border-[1px] border-[#252B37] bg-black rounded-2xl p-4 gap-2 lg:w-[276px] lg:h-[146px] lg:p-5 lg:gap-2 ">
                    <img
                      src="\assets\Icon-Star.svg"
                      alt="Star Icon"
                      className="size-[22px] lg:size-[32px]"
                    />
                    <p className="font-normal text-[12px]/[24px] text-[#D5D7DA] lg:text-[16px]/[30px] ">
                      Rating
                    </p>
                    <p className="font-semibold text-[18px]/[32px] text-[#D5D7DA] lg:text-[20px]/[34px] ">
                      6.2/10
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div className="flex flex-col items-center w-[112.33px] h-[120px] border-[1px] border-[#252B37] bg-black rounded-2xl p-4 gap-2 lg:w-[276px] lg:h-[146px] lg:p-5 lg:gap-2 ">
                    <img
                      src="\assets\Icon-Video.svg"
                      alt="Video Icon"
                      className="size-[22px] lg:size-[32px]"
                    />
                    <p className="font-normal text-[12px]/[24px] text-[#D5D7DA] lg:text-[16px]/[30px] ">
                      Genre
                    </p>
                    <p className="font-semibold text-[18px]/[32px] text-[#D5D7DA] lg:text-[20px]/[34px] ">
                      Action
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div className="flex flex-col items-center w-[112.33px] h-[120px] border-[1px] border-[#252B37] bg-black rounded-2xl p-4 gap-2 lg:w-[276px] lg:h-[146px] lg:p-5 lg:gap-2 ">
                    <img
                      src="\assets\Icon-AgeLimit.svg"
                      alt="Happy Emoticon"
                      className="size-[22px] lg:size-[32px]"
                    />
                    <p className="font-normal text-[12px]/[24px] text-[#D5D7DA] lg:text-[16px]/[30px] ">
                      Age Limit
                    </p>
                    <p className="font-semibold text-[18px]/[32px] text-[#D5D7DA] lg:text-[20px]/[34px] ">
                      13
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="flex flex-col w-auto h-[182px] gap-2 lg:h-[114px] ">
          <h2>Overview</h2>
          <p className="text-[14px]/[28px] font-normal text-[#A4A7AE] lg:text-[16px]/[30px]">
            After meeting with newly elected U.S. President Thaddeus Ross, Sam
            finds himself in the middle of an international incident. He must
            discover the reason behind a nefarious global plot before the true
            mastermind has the entire world seeing red.
          </p>
        </div>
        {/* CAST&CREW */}
        <CastCrew />
      </div>
      {/* <!-- Hero Image --> */}
    </section>
  );
};

export default DetailContent;
