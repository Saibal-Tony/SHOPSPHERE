import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  const image = product.imageUrls?.[imgIdx] || product.imageUrls?.[0];
  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;

  return (
    <div className="group relative">
      {/* Image Container */}
      <Link to={`/products/${product.id}`}>
        <div
          className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] mb-3"
          onMouseEnter={() => product.imageUrls?.length > 1 && setImgIdx(1)}
          onMouseLeave={() => setImgIdx(0)}
        >
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://placehold.co/300x400/e5e7eb/9ca3af?text=${encodeURIComponent(product.name)}`;
            }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-gray-900 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold tracking-wide">
                NEW
              </span>
            )}
            {hasDiscount && (
              <span className="bg-red-500 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold">
                SALE
              </span>
            )}
            {!product.inStock && (
              <span className="bg-gray-400 text-white text-[10px] px-2.5 py-1 rounded-full font-semibold">
                SOLD OUT
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setWishlisted(!wishlisted);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          >
            <svg
              className={`w-4 h-4 transition-colors ${wishlisted ? "fill-red-500 stroke-red-500" : "fill-none stroke-gray-700"}`}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>

          {/* Quick Shop */}
          {product.inStock && (
            <div className="absolute inset-x-0 bottom-0 bg-gray-900/90 text-white text-center text-xs font-semibold py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 tracking-wide">
              QUICK SHOP
            </div>
          )}

          {/* Image dots */}
          {product.imageUrls?.length > 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {product.imageUrls.slice(0, 3).map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setImgIdx(i);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link to={`/products/${product.id}`}>
            <h3 className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors leading-tight line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <p className="text-xs text-gray-400 mb-2 capitalize">
          {product.category} · {product.subCategory}
        </p>

        {/* Rating */}
        {product.rating > 0 && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-3 h-3 ${star <= Math.round(product.rating) ? "fill-amber-400" : "fill-gray-200"}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[10px] text-gray-400">
              ({product.reviewCount})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="text-sm font-bold text-gray-900">
                ₹{product.discountedPrice}
              </span>
              <span className="text-xs text-gray-400 line-through">
                ₹{product.price}
              </span>
            </>
          ) : (
            <span className="text-sm font-bold text-gray-900">
              ₹{product.price}
            </span>
          )}
        </div>

        {/* Size dots */}
        {product.sizes?.length > 0 && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {product.sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                className="text-[10px] border border-gray-200 px-1.5 py-0.5 text-gray-500 rounded"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 5 && (
              <span className="text-[10px] text-gray-400">
                +{product.sizes.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
