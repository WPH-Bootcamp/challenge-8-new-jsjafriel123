import { useEffect } from "react";
import Overlay from "./Overlay";
import { Link, useLocation } from "react-router-dom";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    if (open) onClose();
  }, [location.pathname]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // className={`fixed flex flex-col top-0 left-0 h-full w-[393px] bg-zinc-900 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}

  return (
    <>
      <Overlay show={open} onClick={onClose} />

      <nav
        className={`fixed flex flex-col top-0 left-0 h-full w-full bg-zinc/70 backdrop-blur-2xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-row justify-between h-[64px] w-full px-4 items-center border-b border-b-gray-700">
          <img
            src="../assets/Logo-Movie.svg"
            alt="Logo"
            className="flex h-[28px] w-auto"
          />
          <button
            onClick={onClose}
            className="flex size-6 text-white text-bold text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="flex w-full h-[108px] flex-col justify-center items-start px-6 mt-6">
          <ul className="space-y-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourite">Favourite</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
