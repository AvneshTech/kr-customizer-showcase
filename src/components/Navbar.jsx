const navLinks = ["About Us", "Case Studies", "Blog", "Contact"];

const Navbar = () => {
  return (
    <header className="w-full h-[88px] bg-white border-b border-gray-100">
      <div className="max-w-[1440px] h-full mx-auto px-[84px] py-[18px] flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#3B5BDB] text-sm font-bold text-white">
              kr
            </span>
            <span className="text-lg font-semibold text-gray-900">
              customizer
            </span>
          </a>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <select className="text-[#3B82F6] text-sm font-medium bg-transparent outline-none cursor-pointer">
                  <option>Showcase</option>
                </select>
              </li>

              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#374151] text-sm font-medium hover:text-blue-600"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
            Login
          </button>

          <button className="w-[126px] h-[44px] flex items-center justify-center rounded-lg bg-[#3B5BDB] text-white text-[16px] font-medium hover:bg-[#3048C9] transition-colors cursor-pointer">
            Get a demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
