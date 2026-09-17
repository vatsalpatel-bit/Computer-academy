import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[72px] lg:h-20 flex items-center justify-between">

            {/* Logo + Brand */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <img
                src="src/svg/logo.png"
                alt="Jankalyan Computer Center"
                className="
                  w-11 h-11
                  sm:w-13 sm:h-13
                  lg:w-16 lg:h-16
                  object-contain shrink-0
                "
              />

              <div className="min-w-0">
                <h1
                  className="
                    text-[16px]
                    sm:text-lg
                    lg:text-2xl
                    font-bold
                    text-[#111844]
                    leading-tight
                    truncate
                  "
                >
                  Jankalyan Computer Center
                </h1>

                <p className="text-xs sm:text-sm text-[#7288AE] mt-0.5">
                  Learn • Build • Grow
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative py-2
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? 'text-[#111844]'
                        : 'text-gray-600 hover:text-[#4B5694]'
                    }

                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:bg-[#4B5694]
                    after:transition-all

                    ${
                      isActive
                        ? 'after:w-full'
                        : 'after:w-0 hover:after:w-full'
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <button
              onClick={() => navigate('/enquiry')}
              className="
                hidden lg:block
                bg-red-600
                hover:bg-red-700
                text-white
                px-6 py-3
                rounded-lg
                font-semibold
                transition
                shadow-sm
              "
            >
              Enquire Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                lg:hidden
                flex items-center justify-center
                w-10 h-10
                rounded-lg
                text-[#111844]
                hover:bg-[#EAE0CF]/40
                transition
              "
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`
                    block w-6 h-0.5 bg-[#111844] transition
                    ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}
                  `}
                />

                <span
                  className={`
                    block w-6 h-0.5 bg-[#111844] transition
                    ${isMenuOpen ? 'opacity-0' : ''}
                  `}
                />

                <span
                  className={`
                    block w-6 h-0.5 bg-[#111844] transition
                    ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                  `}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-3">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                      px-4 py-3
                      rounded-lg
                      font-medium
                      transition
                      ${
                        isActive
                          ? 'bg-[#EAE0CF]/50 text-[#111844]'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#4B5694]'
                      }
                      `
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mobile CTA */}
      {/* <button
        onClick={() => navigate('/enquiry')}
        className="
          lg:hidden
          fixed bottom-4 left-4 right-4
          z-50
          bg-red-600
          hover:bg-red-700
          text-white
          py-3.5
          rounded-xl
          font-semibold
          shadow-lg
          transition
        "
      >
        Enquire Now
      </button> */}
    </>
  );
};

export default Navbar;