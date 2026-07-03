const Navbar = () => {
  return (
    <header className="w-full h-[88px] bg-white border-b border-gray-100">
      <div className="max-w-[1440px] h-full mx-auto px-[84px] py-[18px] flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <img src="/logo.svg" alt="KR Customizer" className="h-8" />

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <select href="#" className="text-[#3B82F6] text-sm font-medium">
                  <option>Showcase</option>
                </select>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#374151] text-sm font-medium hover:text-blue-600"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#374151] text-sm font-medium hover:text-blue-600"
                >
                  Case Studies
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#374151] text-sm font-medium hover:text-blue-600"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#374151] text-sm font-medium hover:text-blue-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            Login
          </button>

          <button
            className="w-[126px] h-[44px] flex items-center justify-center rounded-lg bg-[#3B5BDB] text-white text-[16px] font-medium hover:bg-[#3048C9] transition-colors "
          >
            Get a demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
