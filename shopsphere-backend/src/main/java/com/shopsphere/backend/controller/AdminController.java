package com.shopsphere.backend.controller;

import com.shopsphere.backend.model.Product;
import com.shopsphere.backend.model.User;
import com.shopsphere.backend.repository.ProductRepository;
import com.shopsphere.backend.repository.UserRepository;
import com.shopsphere.backend.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ProductService productService;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    // ── Stats ──
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        long totalProducts = productRepository.count();
        long totalUsers = userRepository.count();
        long inStock = productRepository.findAll().stream()
                .filter(p -> Boolean.TRUE.equals(p.getInStock())).count();
        long featured = productRepository.findByIsFeaturedTrue().size();

        return ResponseEntity.ok(Map.of(
                "totalProducts", totalProducts,
                "totalUsers", totalUsers,
                "inStockProducts", inStock,
                "featuredProducts", featured));
    }

    // ── Products ──
    @GetMapping("/products")
    public ResponseEntity<Page<Product>> getAllProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(productRepository.findAll(
                PageRequest.of(page, size, Sort.by("createdAt").descending())));
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        return ResponseEntity.ok(productService.save(product));
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long id, @RequestBody Product product) {
        return ResponseEntity.ok(productService.update(id, product));
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // ── Users ──
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PutMapping("/users/{id}/role")
    public ResponseEntity<User> updateRole(
            @PathVariable Long id,
            @RequestParam String role) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setRole(User.Role.valueOf(role.toUpperCase()));
        return ResponseEntity.ok(userRepository.save(user));
    }
}