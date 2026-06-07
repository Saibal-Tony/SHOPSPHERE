import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
} from "../../api/cartApi";

interface CartProduct {
  id: number;
  name: string;
  price: number;
  discountedPrice?: number;
  imageUrls: string[];
  category: string;
}

interface CartItemDetail {
  id: number;
  product: CartProduct;
  quantity: number;
  size: string;
  color: string;
}

interface CartData {
  id: number;
  items: CartItemDetail[];
  totalPrice: number;
}

export default function CartPage() {
  const { isAuthenticated } = useAuth();
  const [cart, setCart] = useState<CartData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      getCart()
        .then(setCart)
        .catch(console.error)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [isAuthenticated]);

  const handleRemove = async (productId: number) => {
    const updated = await removeFromCart(productId);
    setCart(updated as any);
  };

  const handleQuantity = async (productId: number, qty: number) => {
    if (qty < 1) return;
    const updated = await updateCartItem(productId, qty);
    setCart(updated as any);
  };

  if (!isAuthenticated)
    return (
      <div className="min-h-screen bg-[#f9f9f7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-serif text-2xl text-gray-900 mb-2">
            Sign in to view cart
          </h2>
          <Link
            to="/login"
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors inline-block mt-4"
          >
            Sign In
          </Link>
        </div>
      </div>
    );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  if (!cart || cart.items?.length === 0)
    return (
      <div className="min-h-screen bg-[#f9f9f7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-serif text-2xl text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Looks like you haven't added anything yet
          </p>
          <Link
            to="/products"
            className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors inline-block"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );

  const subtotal = cart.items.reduce((sum, item) => {
    const price = item.product.discountedPrice || item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif text-3xl text-gray-900 font-bold mb-10">
          Shopping Cart{" "}
          <span className="text-gray-400 text-xl font-normal">
            ({cart.items.length} items)
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.items.map((item) => {
              const price = item.product.discountedPrice || item.product.price;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-5 flex gap-5 items-start"
                >
                  <Link to={`/products/${item.product.id}`}>
                    <img
                      src={item.product.imageUrls?.[0]}
                      alt={item.product.name}
                      className="w-24 h-28 object-cover rounded-xl bg-gray-100"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/96x112/e5e7eb/9ca3af?text=img";
                      }}
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link to={`/products/${item.product.id}`}>
                          <h3 className="font-semibold text-gray-900 text-sm hover:text-gray-600 transition-colors">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-gray-400 mt-0.5 capitalize">
                          {item.product.category}
                        </p>
                        <div className="flex gap-2 mt-1.5">
                          {item.size && (
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                              Size: {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                              {item.color}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemove(item.product.id)}
                        className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            handleQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 text-sm font-bold"
                        >
                          −
                        </button>
                        <span className="px-3 py-1.5 text-sm font-semibold min-w-[32px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 text-sm font-bold"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          ₹{(price * item.quantity).toFixed(0)}
                        </p>
                        <p className="text-xs text-gray-400">₹{price} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex flex-col gap-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span
                    className={
                      shipping === 0 ? "text-green-600 font-medium" : ""
                    }
                  >
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">
                    Free shipping on orders over ₹999
                  </p>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span>₹{total.toFixed(0)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full block text-center bg-gray-900 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-gray-700 transition-colors"
              >
                Proceed to Checkout →
              </Link>

              <Link
                to="/products"
                className="w-full block text-center text-gray-500 text-sm mt-3 hover:text-gray-700 transition-colors"
              >
                ← Continue Shopping
              </Link>

              {/* Trust */}
              <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  🔒 Secure checkout
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  ↩️ Easy returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
