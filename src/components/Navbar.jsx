import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const navLinks = ["About Us", "Case Studies", "Blog", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="container-page flex h-[72px] items-center justify-between">
        {/* Left: logo + desktop nav */}
        <div className="flex items-center gap-8 xl:gap-12">
          <a href="#" className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white shadow-sm"
              style={{
                background:
                  "conic-gradient(from 200deg, #3B82F6 0% 28%, #EC4899 28% 58%, #111827 58% 88%, #F5F5F0 88% 100%)",
              }}
            >
              K
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              kr<span className="font-medium text-gray-700">customizer</span>
            </span>
          </a>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <button className="flex items-center gap-1 text-sm font-medium text-[#3458C4]">
                  Showcase
                  <FiChevronDown className="mt-0.5" />
                </button>
              </li>
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm font-medium text-[#374151] hover:text-blue-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right: desktop actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <button className="cursor-pointer text-sm font-medium text-gray-700 hover:text-black">
            Login
          </button>
          <button className="flex h-[44px] w-[126px] items-center justify-center rounded-lg bg-[#3458C4] text-sm font-medium text-white transition-colors hover:bg-[#2C4BB0]">
            Get a demo
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 lg:hidden"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="container-page border-t border-gray-100 bg-white py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#"
                className="block rounded-md px-2 py-2 text-sm font-medium text-[#3458C4] hover:bg-gray-50"
              >
                Showcase
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block rounded-md px-2 py-2 text-sm font-medium text-[#374151] hover:bg-gray-50"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Login
            </button>
            <button className="w-full rounded-lg bg-[#3458C4] py-2.5 text-sm font-medium text-white hover:bg-[#2C4BB0]">
              Get a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
