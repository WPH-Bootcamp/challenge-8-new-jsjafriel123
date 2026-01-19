import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="fixed inset-x-0 top-0 z-30 flex w-full h-13 items-center justify-between bg-black/0 px-4 lg:h-18 lg:px-35 lg:py-10 backdrop-blur-2xl">
        {/* Logo */}
        <div className="flex justify-between w-102.5">
          <a href="/" className="flex items-center">
            <img
              src="../assets/Logo-Movie.svg"
              alt="Logo"
              className="h-7 lg:h-10"
            />
          </a>
          <nav className="hidden lg:flex lg:justify-between items-center w-50 text-white">
            <a href="/">Home</a>
            <a href="/favourite">Favourite</a>
          </nav>
        </div>

        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search Movie"
          className="hidden lg:flex lg:w-[243px] lg:h-14 lg:rounded-xl lg:border-[1px] lg:border-[#252B37] lg:py-2 lg:pl-10 lg:bg-[#0A0D1299]/60 lg:blur-[40%] lg:bg-[url('..\public\assets\Icon-Search.svg')] lg:bg-no-repeat lg:bg-position-[left_10px_center] lg:text-4"
        />

        <div className="flex justify-between w-18 h-6 lg:hidden">
          <a href="/search" className="flex items-center">
            <img
              src="../assets/Icon-Search-White.svg"
              alt="Search Icon"
              className="size-6"
            />
          </a>
          <a
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex items-center"
          >
            <img
              src="../assets/Icon-Hamburger.svg"
              alt="Menu Icon"
              className="size-6"
            />
          </a>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
