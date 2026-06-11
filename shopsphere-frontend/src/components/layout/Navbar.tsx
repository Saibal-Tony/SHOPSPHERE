import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext"; // ← NEW

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const { totalItems } = useCart(); // ← NEW
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Men", to: "/products?category=men" },
    { label: "Women", to: "/products?category=women" },
    { label: "Footwear", to: "/products?category=footwear" },
    { label: "Bags", to: "/products?category=bags" },
    { label: "Beauty", to: "/products?category=beauty" },
    { label: "Electronics", to: "/products?category=electronics" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        } border-b border-gray-100`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col gap-1.5 p-1 lg:hidden"
              >
                <span
                  className={`block w-5 h-0.5 bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </button>

              <div className="hidden lg:flex items-center gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 tracking-wide transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Center — Logo */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-[0.15em] text-gray-900 uppercase"
            >
              ShopSphere
            </Link>

            {/* Right — Icons */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </Link>

              {/* Cart ← UPDATED */}
              <Link
                to="/cart"
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gray-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>

              {/* User */}
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <div className="w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center">
                      {user?.username?.[0]?.toUpperCase() || "U"}
                    </div>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">
                        {user?.username}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <div className="p-1">
                      <Link
                        to="/orders"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        My Orders
                      </Link>
                      <Link
                        to="/profile"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        Profile
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={logout}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-20 border-t border-gray-100" : "max-h-0"}`}
        >
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto px-4 py-3 flex gap-2"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-1 border border-gray-200 rounded-full px-5 py-2 text-sm outline-none focus:border-gray-400 transition-colors"
              autoFocus={searchOpen}
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <span className="font-bold tracking-widest text-gray-900 uppercase">
              ShopSphere
            </span>
            <button onClick={() => setMenuOpen(false)}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="p-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="py-3 px-3 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg border-b border-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {!isAuthenticated && (
            <div className="p-5 flex flex-col gap-2 border-t border-gray-100">
              <Link
                to="/login"
                className="w-full text-center py-2.5 border border-gray-900 text-sm font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full text-center py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-700 transition-colors"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
