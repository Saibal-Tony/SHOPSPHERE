import api from "./axios";
import type { CartItem, CartResponse } from "../types/Product";

export const getCart = async (): Promise<CartResponse> => {
  const res = await api.get("/cart");
  return res.data;
};

export const addToCart = async (item: CartItem): Promise<CartResponse> => {
  const res = await api.post("/cart/add", item);
  return res.data;
};

export const removeFromCart = async (productId: number): Promise<CartResponse> => {
  const res = await api.delete(`/cart/remove/${productId}`);
  return res.data;
};

export const updateCartItem = async (productId: number, quantity: number): Promise<CartResponse> => {
  const res = await api.put(`/cart/update/${productId}`, { quantity });
  return res.data;
};

export const clearCart = async (): Promise<void> => {
  await api.delete("/cart/clear");
};