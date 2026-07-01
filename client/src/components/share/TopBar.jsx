    import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto h-11 flex items-center justify-between px-4">
        {/* Left Side */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-xs" />
            <span>+91 98765 43210</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <FaEnvelope />
            <span>info@computeracademy.com</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden md:block font-medium">
            Follow us :
          </span>

          <FaFacebookF className="cursor-pointer hover:text-blue-300 transition" />
          <FaInstagram className="cursor-pointer hover:text-pink-300 transition" />
          <FaYoutube className="cursor-pointer hover:text-gray-200 transition" />
          <FaTwitter className="cursor-pointer hover:text-blue-200 transition" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;