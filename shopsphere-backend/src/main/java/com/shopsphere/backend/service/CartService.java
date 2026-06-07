package com.shopsphere.backend.service;

import com.shopsphere.backend.dto.CartItemRequest;
import com.shopsphere.backend.model.*;
import com.shopsphere.backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class CartService {

    private final CartRepository cartRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    private Cart getOrCreateCart(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return cartRepository.findByUser(user)
                .orElseGet(() -> cartRepository.save(
                        Cart.builder().user(user).build()));
    }

    public Cart getCart(String email) {
        return getOrCreateCart(email);
    }

    public Cart addItem(String email, CartItemRequest req) {
        Cart cart = getOrCreateCart(email);
        Product product = productRepository.findById(req.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        // Check if same product+size+color already in cart
        cart.getItems().stream()
                .filter(i -> i.getProduct().getId().equals(req.getProductId())
                        && eq(i.getSize(), req.getSize())
                        && eq(i.getColor(), req.getColor()))
                .findFirst()
                .ifPresentOrElse(
                        existing -> existing.setQuantity(existing.getQuantity() + req.getQuantity()),
                        () -> cart.getItems().add(CartItem.builder()
                                .cart(cart).product(product)
                                .quantity(req.getQuantity())
                                .size(req.getSize())
                                .color(req.getColor())
                                .build()));

        return cartRepository.save(cart);
    }

    public Cart updateItem(String email, Long itemId, int quantity) {
        Cart cart = getOrCreateCart(email);
        cart.getItems().stream()
                .filter(i -> i.getId().equals(itemId))
                .findFirst()
                .ifPresent(i -> {
                    if (quantity <= 0)
                        cart.getItems().remove(i);
                    else
                        i.setQuantity(quantity);
                });
        return cartRepository.save(cart);
    }

    public Cart removeItem(String email, Long itemId) {
        Cart cart = getOrCreateCart(email);
        cart.getItems().removeIf(i -> i.getId().equals(itemId));
        return cartRepository.save(cart);
    }

    public void clearCart(String email) {
        Cart cart = getOrCreateCart(email);
        cart.getItems().clear();
        cartRepository.save(cart);
    }

    private boolean eq(String a, String b) {
        if (a == null && b == null)
            return true;
        if (a == null || b == null)
            return false;
        return a.equals(b);
    }
}