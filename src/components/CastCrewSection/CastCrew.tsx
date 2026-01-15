const CastCrew = () => {
  return (
    <div className="w-[361px] h-[534px] gap-4 lg:w-full lg:h-[318px] ">
      <h2>Cast & Crew</h2>

      <div className="grid grid-cols-1 w-[361px] max-h-[484px] gap-4 overflow-y-auto lg:w-full lg:max-h-[248px] lg:grid-cols-3 ">
        {/* Cards */}
        <div className="flex flex-row items-center w-full h-[84px] gap-3 lg:w-[360px] lg:h-[104px] gap-4 ">
          <img
            src="/assets/Cast01-Anthony-Mackie.svg"
            alt="Cast"
            className="w-[55px] h-[84px] lg:w-[69px] lg:h-[104px] "
          />
          <div className="flex-col w-[294px] h-[56px] ">
            <p className="text-[14px]/[28px] font-semibold lg:text-[16px]/[30px] ">
              Anthony Mackie
            </p>
            <p className="text-[14px]/[28px] lg:text-[16px]/[30px] ">
              Sam Wilson / Captain America
            </p>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-row items-center w-full h-[84px] gap-3 lg:w-[360px] lg:h-[104px] gap-4 ">
          <img
            src="/assets/Cast01-Anthony-Mackie.svg"
            alt="Cast"
            className="w-[55px] h-[84px] lg:w-[69px] lg:h-[104px] "
          />
          <div className="flex-col w-[294px] h-[56px] ">
            <p className="text-[14px]/[28px] font-semibold lg:text-[16px]/[30px] ">
              Anthony Mackie
            </p>
            <p className="text-[14px]/[28px] lg:text-[16px]/[30px] ">
              Sam Wilson / Captain America
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastCrew;
