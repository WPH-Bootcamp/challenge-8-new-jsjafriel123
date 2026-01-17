const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col w-screen h-[120px] py-6 px-4 gap-2 justify-center lg:flex-row lg:justify-between lg:items-center lg:h-[120px] lg:px-35 lg:py-2"
    >
      <img
        src="../assets/Logo-Movie.svg"
        alt="Logo"
        className="flex w-[92px] h-[28px] lg:w-[129px] lg:h-[40px]"
      />

      {/* <!-- Text --> */}
      <p className="flex text-[12px]/[24px] text-[#535862] lg:text-[16px]/[30px] ">
        Copyright &copy; 2025 Movie Explorer
      </p>
    </section>
  );
};

export default Footer;
