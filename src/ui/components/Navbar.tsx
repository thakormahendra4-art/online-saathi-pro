import { Fragment } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

import logo from "../../assets/logo.png";
import { useNavbar } from "../../hooks/useNavbar";

const servicesItems = [
  { name: "Safe Jobs Connect", path: "/safe-jobs" },
  { name: "Social Welfare Schemes", path: "/government-schemes" },
];

const onDemandItems = [
  { name: "Micro ATM", path: "/micro-atm" },
  { name: "PAN Card Center", path: "/pan-card" },
  { name: "Travel", path: "/travel" },
  { name: "Insurance", path: "/services" },
  { name: "Bill Payment", path: "/bill-payment" },
  { name: "Neo Banking", path: "/neo-banking" },
  { name: "Indo-Nepal Remittance", path: "/saathi-network" },
];

const Navbar = () => {
  const {
    isOpen,
    setIsOpen,
    isScrolled,
    servicesOpen,
    setServicesOpen,
    mobileServicesOpen,
    setMobileServicesOpen,
    mobileOnDemandOpen,
    setMobileOnDemandOpen,
    closeMobileMenu,
    isServicesActive,
  } = useNavbar();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Partner", path: "/partner" },
    { name: "Saathi", path: "/saathi-network" },
    { name: "Technology", path: "/technology" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className={`w-full border-b border-gray-200 bg-[#faf8ff] transition-shadow duration-300 ${isScrolled ? "sticky top-0" : "relative"} z-[60] ${isScrolled ? "shadow-md" : ""}`}>
      <div className="mx-auto flex h-[78px] max-w-[1250px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="OnlineSaathi Logo"
            className="h-10 w-10 object-contain"
          />

          <h1 className="text-2xl font-bold tracking-tight text-[#006b9e]">
            <span className="text-red-400">Online</span>
            <span className="text-green-400">Saathi</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Fragment key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative flex h-[78px] items-center pt-[2px] text-[17px] font-medium transition-colors ${
                    isActive
                      ? "text-[#006b9e]"
                      : "text-gray-600 hover:text-[#006b9e]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>

                    {isActive && (
                      <span className="absolute bottom-[17px] left-0 h-[2px] w-full bg-[#006b9e]" />
                    )}
                  </>
                )}
              </NavLink>

              {item.name === "Saathi" && (
                <div
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`relative flex h-[78px] items-center gap-1.5 pt-[2px] text-[17px] font-medium transition-colors ${
                      isServicesActive || servicesOpen
                        ? "text-[#006b9e]"
                        : "text-gray-600 hover:text-[#006b9e]"
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />

                    {(isServicesActive || servicesOpen) && (
                      <span className="absolute bottom-[17px] left-0 h-[2px] w-full bg-[#006b9e]" />
                    )}
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
                      {servicesItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setServicesOpen(false)}
                          className="block rounded-lg px-4 py-2.5 text-[15px] font-medium text-gray-700 transition-colors hover:bg-sky-50 hover:text-[#006b9e]"
                        >
                          {item.name}
                        </Link>
                      ))}

                      {/* On-Demand Services nested dropdown */}
                      <div className="group relative">
                        <div className="flex items-center justify-between rounded-lg px-4 py-2.5 text-[15px] font-medium text-gray-700 transition-colors hover:bg-sky-50 hover:text-[#006b9e]">
                          <span>On-Demand Services</span>
                          <ChevronRight
                            size={15}
                            className="text-gray-400 transition-transform duration-150 group-hover:translate-x-1"
                          />
                        </div>

                        <div className="invisible absolute left-full top-0 ml-2 w-60 rounded-xl border border-gray-100 bg-white py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                          {onDemandItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setServicesOpen(false)}
                              className="block rounded-lg px-4 py-2 text-[14px] font-medium text-gray-600 transition-colors hover:bg-sky-50 hover:text-[#006b9e]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Desktop Login */}
        <div className="hidden lg:flex">
          <a
            href="https://dash.onlinesaathi.org/login"
            className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-[16px] font-medium text-gray-800 shadow-sm transition-all duration-200 hover:border-[#13a5df] hover:bg-sky-50 hover:text-[#006b9e]"
          >
            Log In
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-[#faf8ff] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Fragment key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-sky-50 text-[#006b9e]"
                        : "text-gray-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                </NavLink>

                {item.name === "Saathi" && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100"
                    >
                      Services
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="mt-1 space-y-1 border-l-2 border-sky-100 pl-3">
                        {servicesItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#006b9e]"
                          >
                            {item.name}
                          </Link>
                        ))}

                        <div>
                          <button
                            type="button"
                            onClick={() => setMobileOnDemandOpen((o) => !o)}
                            className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#006b9e]"
                          >
                            On-Demand Services
                            <ChevronDown
                              size={16}
                              className={`text-gray-400 transition-transform duration-200 ${
                                mobileOnDemandOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {mobileOnDemandOpen && (
                            <div className="mt-1 space-y-1 border-l-2 border-sky-100 pl-3">
                              {onDemandItems.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={closeMobileMenu}
                                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#006b9e]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Fragment>
            ))}

            {/* Mobile Login */}
            <div className="mt-3 border-t border-gray-200 pt-4">
              <a
                href="https://dash.onlinesaathi.org/login"
                onClick={closeMobileMenu}
                className="block w-full rounded-xl border border-gray-200 bg-white px-6 py-3 text-center font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;