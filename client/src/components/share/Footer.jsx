import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '@/svg/logo.png';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses' },
  { name: 'Branches', path: '/branches' },
  { name: 'Contact', path: '/contact' },
  // { name: "Enquiry Now", path: "/enquiry" },
];

const Footer = () => {
  return (
    <footer className="bg-[#111844] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:pr-6">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Jankalyan" className="w-14 h-14 object-contain" />

              <div>
                <h2 className="text-lg font-bold text-[#EAE0CF] leading-tight">Jankalyan</h2>
                <p className="text-sm text-[#7288AE]">Computer Center</p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-7">
              Practical computer education, skill-based training, and guidance for a better future.
            </p>
            <div className="flex gap-3 mt-6">
              <div className="flex items-center">
                <a
                  href="https://instagram.com/jankalyan_computer_centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Jankalyan Computer Center on Instagram"
                  className="
      w-11 h-11 rounded-xl
      bg-white/5
      border border-white/10
      hover:bg-[#4B5694]
      hover:border-[#4B5694]
      transition-all duration-300
      flex items-center justify-center
    "
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#EAE0CF] mb-5">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="
                      group
                      flex items-center gap-2
                      text-white/70
                      hover:text-[#EAE0CF]
                      transition
                    "
                  >
                    <FaChevronRight
                      size={10}
                      className="text-[#7288AE] group-hover:translate-x-1 transition"
                    />

                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#EAE0CF] mb-5">Contact</h3>

            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="
                  flex items-center gap-3
                  p-3 rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-[#4B5694]
                  transition
                "
              >
                <FaPhoneAlt className="text-[#7288AE]" />

                <span className="text-sm text-white/80">+91 99988 68445</span>
              </a>

              <a
                href="mailto:info@computeracademy.com"
                className="
                  flex items-center gap-3
                  p-1 rounded-xl
                  bg-white/5
                  border border-white/10
                  hover:border-[#4B5694]
                  transition
                "
              >
                <FaEnvelope className="text-[#7288AE]" />

                <span className="text-sm text-white/80 break-all">jankayancomputercenter@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-[#EAE0CF] mb-5">Visit Us</h3>

            <div
              className="
                flex gap-3
                p-4 rounded-xl
                bg-white/5
                border border-white/10
              "
            >
              <FaMapMarkerAlt className="text-[#7288AE] mt-1" />

              <p className="text-sm text-white/70 leading-6">
                Parshwa Complex,
                <br />
                Opp. Bus Depo,
                <br />
                Beside I.C.I.C. Bank,
                <br />
                Vasad 388 306
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div
          className="
            max-w-7xl mx-auto
            px-5 sm:px-6 lg:px-8
            py-5
            flex flex-col md:flex-row
            justify-between
            items-center
            gap-3
          "
        >
          <p className="text-xs sm:text-sm text-white/50 text-center md:text-left">
            © {new Date().getFullYear()} Jankalyan Computer Center. All Rights Reserved.
          </p>

          <p className="text-xs sm:text-sm text-white/50">
            Designed & Developed by <span className="text-[#EAE0CF] font-semibold">Vatsal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
