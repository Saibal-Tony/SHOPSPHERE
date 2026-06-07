import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axios";

interface OrderItem {
  id: number;
  product: { id: number; name: string; imageUrls: string[] };
  quantity: number;
  size: string;
  priceAtPurchase: number;
}

interface Order {
  id: number;
  status: string;
  totalPrice: number;
  createdAt: string;
  items: OrderItem[];
  shippingAddress: string;
}

const STATUS_COLORS: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  SHIPPED: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => setOrders(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen bg-[#f9f9f7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-serif text-3xl text-gray-900 font-bold mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="font-serif text-xl text-gray-900 mb-2">
              No orders yet
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Your order history will appear here
            </p>
            <Link
              to="/products"
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors inline-block"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-5">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-6">
                {/* Order header */}
                <div className="flex items-center justify-between flex-wrap gap-3 mb-5 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Order #{order.id}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(order.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full ${STATUS_COLORS[order.status] || "bg-gray-100 text-gray-600"}`}
                    >
                      {order.status}
                    </span>
                    <span className="font-bold text-gray-900">
                      ₹{order.totalPrice}
                    </span>
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-col gap-3">
                  {order.items?.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <img
                        src={item.product?.imageUrls?.[0]}
                        alt={item.product?.name}
                        className="w-14 h-14 object-cover rounded-xl bg-gray-100"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/56x56/e5e7eb/9ca3af?text=img";
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {item.product?.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          Qty: {item.quantity}
                          {item.size && ` · Size: ${item.size}`}· ₹
                          {item.priceAtPurchase}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
