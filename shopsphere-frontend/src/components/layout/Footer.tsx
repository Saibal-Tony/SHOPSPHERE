import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Shop",
      links: [
        { label: "Men", to: "/products?category=men" },
        { label: "Women", to: "/products?category=women" },
        { label: "Accessories", to: "/products?category=accessories" },
        { label: "Beauty", to: "/products?category=beauty" },
        { label: "Electronics", to: "/products?category=electronics" },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "FAQ", to: "/faq" },
        { label: "Shipping", to: "/shipping" },
        { label: "Returns", to: "/returns" },
        { label: "Track Order", to: "/orders" },
        { label: "Contact Us", to: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Careers", to: "/careers" },
        { label: "Press", to: "/press" },
        { label: "Privacy Policy", to: "/privacy" },
        { label: "Terms", to: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-white text-xl font-bold tracking-[0.15em] uppercase"
            >
              ShopSphere
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Premium fashion and lifestyle products curated for the modern
              individual.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors text-xs"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold">Stay in the loop</h4>
              <p className="text-sm text-gray-400 mt-1">
                Get new arrivals and exclusive offers in your inbox.
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-gray-800 border border-gray-700 rounded-full px-5 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} ShopSphere. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              to="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link
              to="/cookies"
              className="hover:text-gray-300 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
