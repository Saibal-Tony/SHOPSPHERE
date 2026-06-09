import { useState } from "react";
import { Link } from "react-router-dom";
import AnimateOnScroll from "../../components/common/AnimateOnScroll";

export default function WishlistPage() {
  const [items] = useState([]);

  return (
    <div className="min-h-screen bg-[#f0fafa]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#031716] to-[#032F30] text-white py-16 px-8">
        <AnimateOnScroll animation="bottom">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#0C969C] text-xs tracking-[0.4em] uppercase mb-3">
              Your Collection
            </p>
            <h1 className="font-serif text-5xl font-bold mb-2">Wishlist</h1>
            <p className="text-white/40 text-sm">
              Items you love, saved for later
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimateOnScroll animation="scale">
          <div className="text-center py-16">
            {/* Animated heart */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div
                className="absolute inset-0 rounded-full bg-[#0C969C]/10"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              />
              <div
                className="absolute inset-4 rounded-full bg-[#0C969C]/20"
                style={{ animation: "pulse 2s ease-in-out infinite 0.3s" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-[#0C969C]"
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
              </div>
            </div>

            <h2 className="font-serif text-3xl text-gray-900 mb-3">
              Nothing saved yet
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
              When you find something you love, tap the heart icon on any
              product to save it here.
            </p>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#031716] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#0A7075] transition-all duration-300 hover:gap-4"
            >
              Discover Products
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Suggestion strip */}
        <AnimateOnScroll animation="bottom" delay={200}>
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-6">
              You might like
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["Men", "Women", "Bags", "Beauty", "Electronics"].map((cat) => (
                <Link
                  key={cat}
                  to={`/products?category=${cat.toLowerCase()}`}
                  className="px-5 py-2.5 rounded-full border border-[#0A7075]/30 text-[#0A7075] text-sm font-medium hover:bg-[#0A7075] hover:text-white transition-all duration-300"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
