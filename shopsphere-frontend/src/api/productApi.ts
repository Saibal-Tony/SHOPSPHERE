import api from "./axios";
import type { Product, ProductFilters, PagedResponse } from "../types/Product";

export const getProducts = async (filters: ProductFilters): Promise<PagedResponse<Product>> => {
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.subCategory) params.set("subCategory", filters.subCategory);
  if (filters.search) params.set("search", filters.search);
  if (filters.minPrice !== undefined) params.set("minPrice", String(filters.minPrice));
  if (filters.maxPrice !== undefined) params.set("maxPrice", String(filters.maxPrice));
  if (filters.inStock !== undefined) params.set("inStock", String(filters.inStock));
  if (filters.rating !== undefined) params.set("rating", String(filters.rating));
  if (filters.sortBy) params.set("sortBy", filters.sortBy);
  if (filters.page !== undefined) params.set("page", String(filters.page));
  if (filters.size !== undefined) params.set("size", String(filters.size));
  if (filters.sizes?.length) params.set("sizes", filters.sizes.join(","));
  if (filters.colors?.length) params.set("colors", filters.colors.join(","));
  const res = await api.get(`/products?${params.toString()}`);
  return res.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  const res = await api.get("/products/featured");
  return res.data;
};

export const getNewArrivals = async (): Promise<Product[]> => {
  const res = await api.get("/products/new-arrivals");
  return res.data;
};