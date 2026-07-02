import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "@/svg/logo.png"

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Courses", path: "/courses" },
  { name: "Branches", path: "/branches" },
  { name: "Contact", path: "/contact" },
  { name: "Enquiry Now", path: "/enquiry" },
  
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1E45] text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <img src={logo} alt="Computer Academy" className="w-40 mb-4" />

          <p className="text-gray-300 leading-7">
            Empowering students with industry-ready skills through quality
            computer education and practical learning.
          </p>

          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaInstagram, FaYoutube, FaTwitter].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 transition duration-300 flex items-center justify-center"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-5 text-red-500">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 hover:text-red-400 transition"
                >
                  <FaChevronRight size={12} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-5 text-red-500">
            Contact Info
          </h3>

          <div className="space-y-5">
            <div className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-red-500" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex gap-3">
              <FaEnvelope className="mt-1 text-red-500" />
              <span>info@computeracademy.com</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-2xl font-bold mb-5 text-red-500">
            Address
          </h3>

          <div className="flex gap-3">
            <FaMapMarkerAlt className="mt-1 text-red-500" />

            <p className="text-gray-300 leading-7">
              Computer Academy,
              <br />
              First Floor, ABC Complex,
              <br />
              Chikhli, Navsari,
              <br />
              Gujarat - 396521
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-300 text-sm">
          <p>
            © {new Date().getFullYear()} Computer Academy. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="text-red-500 font-semibold">
              Batman
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;