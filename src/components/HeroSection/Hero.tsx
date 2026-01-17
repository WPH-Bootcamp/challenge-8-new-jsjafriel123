const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center w-full h-140 relative lg:h-190.75 "
    >
      {/* <!-- Hero Text + Button --> */}
      <div
        id="hero-image"
        className="flex relative h-98 items-start overflow-hidden w-screen lg:h-[763px]"
      >
        <img
          src="..\public\assets\Hero-Gorge.svg"
          alt="Hero Image"
          className="size-full object-cover object-top"
        />
        <div className="absolute bottom-0 w-full h-14 lg:h-19  bg-linear-to-t from-black to-black/0 z-10"></div>
      </div>

      <div
        id="hero-text"
        className="flex flex-col justify-between absolute top-55.75 w-90.25 h-77.5 lg:w-158.75 lg:h-66.5 gap-6 px-4 text-left lg:top-74.5 lg:left-35 z-20"
      >
        <h1 className="font-bold text-[#FDFDFD] text-[24px]/[36px] lg:text-[48px]/[60px]">
          The Gorge
        </h1>
        <p className="text-[14px]/[28px] font-normal text-[#A4A7AE] lg:text-[16px]/[30px]">
          Two highly trained operatives grow close from a distance after being
          sent to guard opposite sides of a mysterious gorge. When an evil below
          emerges, they must work together to survive what lies within.
        </p>
        <div className="flex flex-col items-center justify-center w-auto h-26 gap-4 lg:flex-row lg:items-center lg:justify-between lg:w-119">
          <a className="inline-flex w-90.25 h-11 gap-2 rounded-full bg-[#961200] text-white items-center justify-center lg:w-57.5 lg:h-13">
            <span>Watch Trailer</span>
            <img
              src="..\public\assets\Icon-Play.svg"
              alt="Play"
              className="size-[18px] lg:size-[24px]"
            />
          </a>

          <a
            href="/DetailPage"
            className="flex items-center justify-center h-11 lg:h-13"
          >
            See Detail
          </a>
        </div>
      </div>
      {/* <!-- Hero Image --> */}
    </section>
  );
};

export default Hero;
