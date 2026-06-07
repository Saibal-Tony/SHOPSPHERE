export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  category: string;       // "men" | "women" | "bags" | "beauty" | "electronics" | "accessories"
  subCategory: string;    // "shirts" | "pants" | "frocks" | "watches" | etc.
  imageUrls: string[];
  sizes: string[];
  colors: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isFeatured: boolean;
  isNew: boolean;
  createdAt: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  size: string;
  color: string;
}

export interface CartResponse {
  id: number;
  items: CartItemDetail[];
  totalPrice: number;
}

export interface CartItemDetail {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: "USER" | "ADMIN";
}

export interface AuthResponse {
  token: string;
  id: number;
  username: string;
  email: string;
  role: string;
}
export interface ProductFilters {
  category?: string;
  subCategory?: string;
  sizes?: string[];
  colors?: string[];
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  tags?: string[];
  search?: string;
  sortBy?: "price_asc" | "price_desc" | "rating" | "newest";
  page?: number;
  size?: number;
}

export interface PagedResponse<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}