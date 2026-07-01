import { NavLink } from "react-router-dom";
import TopBar from "./TopBar";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    { name: "Branches", path: "/branches" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <TopBar />

      <header className="bg-white shadow-md sticky top-0 z-50 px-24">
        <div className="mx-auto h-20 flex items-center justify-between px-10
        ">
          {/* Logo */}
          <div className="flex items-center gap-10">
            <img
              src="src/svg/logo.png"
              alt="Logo"
              className="w-24 h-24 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                Computer Academy
              </h1>

              <p className="text-sm text-gray-500">
                Learn • Build • Grow
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Enquire Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;