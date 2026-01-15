const Trending = () => {
  return (
    <section
      id="trending"
      className="flex flex-col items-center gap-6 px-4 pb-[20px] w-screen h-[474px] lg:w-screen lg:h-[565px] lg:gap-10 lg:px-[140px]"
    >
      <div className="flex flex-col items-center justify-center relative w-[380px] h-full lg:w-[1285px]">
        <h2 className="w-[361px] lg:w-[1160px] ">Trending Now</h2>
        <div className="flex flex-row gap-5 w-[361px] h-[334px] lg:w-[1160px] lg:h-[397px] ">
          {/* CARD CONTAINER */}
          <div
            id="card"
            className="flex flex-col w-[173px] h-[334px] lg:w-[216px] lg:h-[397px] "
          >
            <img
              src="/assets/Trend01-Gorge.svg"
              alt="Card Image"
              className="w-[173px] h-[266px] object-cover lg:w-[216px] lg:h-[321px] "
            />
            <p className="px-1 text-[16px]/[30px] font-semibold lg:text-[18px]/[32px]">
              The Gorge
            </p>
            <div className="flex items-center w-full gap-1 px-1">
              <img
                src="/assets/Icon-Star.svg"
                alt="Star Icon"
                className="size-4.5 lg:size-5"
              />
              <span className="text-[16px]/[30px] lg:text-[18px]/[32px]">
                7.9/10
              </span>
            </div>
          </div>
          {/* CARD CONTAINER */}
          <div
            id="card"
            className="flex flex-col w-[173px] h-[334px] lg:w-[216px] lg:h-[397px] "
          >
            <img
              src="/assets/Trend02-Mufasa.svg"
              alt="Card Image"
              className="w-[173px] h-[266px] object-cover lg:w-[216px] lg:h-[321px] "
            />
            <p className="px-1 text-[16px]/[30px] font-semibold lg:text-[18px]/[32px]">
              Mufasa
            </p>
            <div className="flex items-center w-full gap-1 px-1">
              <img
                src="/assets/Icon-Star.svg"
                alt="Star Icon"
                className="size-4.5 lg:size-5"
              />
              <span className="text-[16px]/[30px] lg:text-[18px]/[32px]">
                7.5/10
              </span>
            </div>
          </div>
        </div>
        <button
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
        {"test "}
        <button
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
};

export default Trending;
