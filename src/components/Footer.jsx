import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const company = ["About Us", "Showcase", "Case Studies", "Blog", "Become a Partner"];
const customizer = [
  "Bakery",
  "Fashion & Apparel",
  "Jewelry & Accessories",
  "Gifting & Occasion Based",
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1440px] px-[84px] py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              CUSTOMIZER
            </span>
            <p className="mt-3 max-w-[220px] text-sm text-gray-500">
              Get tips, new features &amp; exclusive deals
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customizer */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Customizer</h4>
            <ul className="mt-4 space-y-3">
              {customizer.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>1 800-259-3265</li>
              <li>support@kds.com</li>
            </ul>

            <h4 className="mt-6 text-sm font-semibold text-gray-900">Social</h4>
            <div className="mt-4 flex items-center gap-4 text-gray-500">
              <a href="#" aria-label="Instagram" className="hover:text-gray-900">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-900">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-900">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row">
          <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
            Privacy policy
          </a>
          <p className="text-xs text-gray-500">
            © 2025 Customizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
