import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ProductsPage from "../pages/Product/ProductsPage";
import ProductDetailsPage from "../pages/Product/ProductDetailsPage";
import CartPage from "../pages/Cart/CartPage";
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import OrdersPage from "../pages/Orders/OrdersPage";
import AdminDashboardPage from "../pages/Admin/AdminDashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import WishlistPage from "../pages/Wishlist/WishlistPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}
