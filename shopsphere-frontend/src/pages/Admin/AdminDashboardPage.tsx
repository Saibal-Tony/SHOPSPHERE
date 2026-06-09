import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
import api from "../../api/axios";

// ── Types ──
interface AdminStats {
  totalProducts: number;
  totalUsers: number;
  inStockProducts: number;
  featuredProducts: number;
}

interface AdminProduct {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  discountedPrice?: number;
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  imageUrls: string[];
}

interface AdminUser {
  id: number;
  username: string;
  email: string;
  role: string;
  createdAt: string;
}

// ── API calls ──
const fetchStats = () => api.get("/admin/stats").then((r) => r.data);
const fetchProducts = (page: number) =>
  api.get(`/admin/products?page=${page}&size=10`).then((r) => r.data);
const fetchUsers = () => api.get("/admin/users").then((r) => r.data);
const deleteProduct = (id: number) => api.delete(`/admin/products/${id}`);
const toggleFeatured = (product: AdminProduct) =>
  api.put(`/admin/products/${product.id}`, {
    ...product,
    isFeatured: !product.isFeatured,
  });
const toggleStock = (product: AdminProduct) =>
  api.put(`/admin/products/${product.id}`, {
    ...product,
    inStock: !product.inStock,
  });

// ── Stat Card ──
function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number | string;
  icon: string;
  color: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
            {label}
          </p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <span className="text-4xl opacity-20">{icon}</span>
      </div>
    </div>
  );
}

// ── Main Component ──
export default function AdminDashboardPage() {
  const [tab, setTab] = useState<"overview" | "products" | "users">("overview");
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { data: stats } = useQuery<AdminStats>({
    queryKey: ["admin-stats"],
    queryFn: fetchStats,
  });

  const { data: productsData, isLoading: loadingProducts } = useQuery({
    queryKey: ["admin-products", page],
    queryFn: () => fetchProducts(page),
    enabled: tab === "products",
  });

  const { data: users, isLoading: loadingUsers } = useQuery<AdminUser[]>({
    queryKey: ["admin-users"],
    queryFn: fetchUsers,
    enabled: tab === "users",
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      queryClient.invalidateQueries({ queryKey: ["admin-stats"] });
      setDeleteConfirm(null);
    },
  });

  const featuredMutation = useMutation({
    mutationFn: toggleFeatured,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin-products"] }),
  });

  const stockMutation = useMutation({
    mutationFn: toggleStock,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["admin-products"] }),
  });

  const products: AdminProduct[] = productsData?.content || [];
  const totalPages: number = productsData?.totalPages || 0;

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()),
  );

  const tabs = [
    { key: "overview", label: "Overview", icon: "📊" },
    { key: "products", label: "Products", icon: "👕" },
    { key: "users", label: "Users", icon: "👥" },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase mb-1">
                ShopSphere
              </p>
              <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Live</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-8">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  tab === t.key
                    ? "bg-white text-gray-900"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{t.icon}</span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── OVERVIEW ── */}
        {tab === "overview" && (
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <StatCard
                label="Total Products"
                value={stats?.totalProducts ?? "—"}
                icon="📦"
                color="border-blue-500"
              />
              <StatCard
                label="Total Users"
                value={stats?.totalUsers ?? "—"}
                icon="👥"
                color="border-purple-500"
              />
              <StatCard
                label="In Stock"
                value={stats?.inStockProducts ?? "—"}
                icon="✅"
                color="border-green-500"
              />
              <StatCard
                label="Featured"
                value={stats?.featuredProducts ?? "—"}
                icon="⭐"
                color="border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quick actions */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-5">
                  Quick Actions
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "Manage Products",
                      sub: "Add, edit, delete products",
                      onClick: () => setTab("products"),
                      icon: "👕",
                    },
                    {
                      label: "Manage Users",
                      sub: "View and update user roles",
                      onClick: () => setTab("users"),
                      icon: "👥",
                    },
                  ].map((action) => (
                    <button
                      key={action.label}
                      onClick={action.onClick}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all text-left"
                    >
                      <span className="text-2xl">{action.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {action.label}
                        </p>
                        <p className="text-xs text-gray-400">{action.sub}</p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-300 ml-auto"
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
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories breakdown */}
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-5">Categories</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { cat: "Men", color: "bg-blue-500", pct: 25 },
                    { cat: "Women", color: "bg-pink-500", pct: 30 },
                    { cat: "Bags", color: "bg-amber-500", pct: 15 },
                    { cat: "Beauty", color: "bg-purple-500", pct: 15 },
                    { cat: "Electronics", color: "bg-green-500", pct: 10 },
                    { cat: "Accessories", color: "bg-orange-500", pct: 5 },
                  ].map((item) => (
                    <div key={item.cat} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-20">
                        {item.cat}
                      </span>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-8">
                        {item.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── PRODUCTS ── */}
        {tab === "products" && (
          <div>
            {/* Toolbar */}
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <div className="relative flex-1 min-w-[200px] max-w-sm">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-full text-sm outline-none focus:border-gray-400 bg-white"
                />
              </div>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-sm text-gray-400">
                  {productsData?.totalElements || 0} products
                </span>
              </div>
            </div>

            {loadingProducts ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <>
                {/* Table */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                          Category
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                          Status
                        </th>
                        <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                          Rating
                        </th>
                        <th className="text-right px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {filteredProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          {/* Product */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <img
                                  src={product.imageUrls?.[0]}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                      "https://placehold.co/48x48/e5e7eb/9ca3af?text=img";
                                  }}
                                />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900 text-sm line-clamp-1">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  ID: {product.id}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full capitalize">
                              {product.category}
                            </span>
                          </td>

                          {/* Price */}
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">
                                ₹{product.discountedPrice || product.price}
                              </p>
                              {product.discountedPrice && (
                                <p className="text-xs text-gray-400 line-through">
                                  ₹{product.price}
                                </p>
                              )}
                            </div>
                          </td>

                          {/* Status */}
                          <td className="px-6 py-4 hidden lg:table-cell">
                            <div className="flex flex-col gap-1">
                              <span
                                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit ${
                                  product.inStock
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-600"
                                }`}
                              >
                                {product.inStock ? "In Stock" : "Out of Stock"}
                              </span>
                              {product.isFeatured && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit bg-amber-100 text-amber-700">
                                  Featured
                                </span>
                              )}
                              {product.isNew && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full w-fit bg-blue-100 text-blue-700">
                                  New
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Rating */}
                          <td className="px-6 py-4 hidden lg:table-cell">
                            <div className="flex items-center gap-1">
                              <svg
                                className="w-3.5 h-3.5 fill-amber-400"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="text-sm font-medium text-gray-700">
                                {product.rating}
                              </span>
                              <span className="text-xs text-gray-400">
                                ({product.reviewCount})
                              </span>
                            </div>
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              {/* Toggle featured */}
                              <button
                                onClick={() => featuredMutation.mutate(product)}
                                title={
                                  product.isFeatured ? "Unfeature" : "Feature"
                                }
                                className={`p-1.5 rounded-lg transition-colors ${
                                  product.isFeatured
                                    ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                                }`}
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              </button>

                              {/* Toggle stock */}
                              <button
                                onClick={() => stockMutation.mutate(product)}
                                title={
                                  product.inStock
                                    ? "Mark out of stock"
                                    : "Mark in stock"
                                }
                                className={`p-1.5 rounded-lg transition-colors ${
                                  product.inStock
                                    ? "bg-green-100 text-green-600 hover:bg-green-200"
                                    : "bg-red-100 text-red-400 hover:bg-red-200"
                                }`}
                              >
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
                                    d={
                                      product.inStock
                                        ? "M5 13l4 4L19 7"
                                        : "M6 18L18 6M6 6l12 12"
                                    }
                                  />
                                </svg>
                              </button>

                              {/* Delete */}
                              <button
                                onClick={() => setDeleteConfirm(product.id)}
                                className="p-1.5 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 transition-colors"
                              >
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredProducts.length === 0 && (
                    <div className="text-center py-16 text-gray-400">
                      No products found
                    </div>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-2 mt-6">
                    <button
                      onClick={() => setPage((p) => Math.max(0, p - 1))}
                      disabled={page === 0}
                      className="px-4 py-2 rounded-full border border-gray-200 text-sm disabled:opacity-40 hover:border-gray-400 bg-white"
                    >
                      ← Prev
                    </button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPage(i)}
                        className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                          page === i
                            ? "bg-gray-900 text-white"
                            : "border border-gray-200 hover:border-gray-400 bg-white"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={() =>
                        setPage((p) => Math.min(totalPages - 1, p + 1))
                      }
                      disabled={page >= totalPages - 1}
                      className="px-4 py-2 rounded-full border border-gray-200 text-sm disabled:opacity-40 hover:border-gray-400 bg-white"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* ── USERS ── */}
        {tab === "users" && (
          <div>
            <p className="text-sm text-gray-400 mb-6">
              {users?.length || 0} registered users
            </p>

            {loadingUsers ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        User
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider hidden md:table-cell">
                        Email
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="text-left px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                        Joined
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {users?.map((user) => (
                      <tr
                        key={user.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                              {user.username?.[0]?.toUpperCase()}
                            </div>
                            <p className="font-semibold text-gray-900 text-sm">
                              {user.username}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell">
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                              user.role === "ADMIN"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 hidden lg:table-cell">
                          <p className="text-xs text-gray-400">
                            {user.createdAt
                              ? new Date(user.createdAt).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                  },
                                )
                              : "—"}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {(!users || users.length === 0) && (
                  <div className="text-center py-16 text-gray-400">
                    No users found
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-4">🗑️</div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                Delete Product?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                This action cannot be undone. The product will be permanently
                removed.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => deleteMutation.mutate(deleteConfirm)}
                  disabled={deleteMutation.isPending}
                  className="flex-1 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors disabled:opacity-60"
                >
                  {deleteMutation.isPending ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
