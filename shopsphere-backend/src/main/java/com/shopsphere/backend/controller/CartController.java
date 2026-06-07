package com.shopsphere.backend.controller;

import com.shopsphere.backend.dto.CartItemRequest;
import com.shopsphere.backend.model.Cart;
import com.shopsphere.backend.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<Cart> getCart(@AuthenticationPrincipal UserDetails user) {
        return ResponseEntity.ok(cartService.getCart(user.getUsername()));
    }

    @PostMapping("/add")
    public ResponseEntity<Cart> addItem(
            @AuthenticationPrincipal UserDetails user,
            @RequestBody CartItemRequest req) {
        return ResponseEntity.ok(cartService.addItem(user.getUsername(), req));
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<Cart> removeItem(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long productId) {
        return ResponseEntity.ok(cartService.removeItem(user.getUsername(), productId));
    }

    @PutMapping("/update/{productId}")
    public ResponseEntity<Cart> updateItem(
            @AuthenticationPrincipal UserDetails user,
            @PathVariable Long productId,
            @RequestParam int quantity) {
        return ResponseEntity.ok(cartService.updateItem(user.getUsername(), productId, quantity));
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearCart(@AuthenticationPrincipal UserDetails user) {
        cartService.clearCart(user.getUsername());
        return ResponseEntity.noContent().build();
    }
}