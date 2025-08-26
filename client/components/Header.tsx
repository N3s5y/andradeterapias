import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = useLocation();

  const navigationItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "OUR TEAM", path: "/our-team" },
    { label: "APPOINTMENTS", path: "/appointments" },
    { label: "GIFT VOUCHERS", path: "/gift-vouchers" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-black">mp</span>
            </div>
            <div className="text-white">
              <div className="text-xl font-bold tracking-wider">MARPLE</div>
              <div className="text-xl font-bold tracking-wider">PHYSIO</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-6 py-3 text-sm font-medium tracking-wider transition-all duration-200",
                    isActive
                      ? "bg-brand text-black rounded-full"
                      : "text-white hover:text-brand"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button (placeholder for now) */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
