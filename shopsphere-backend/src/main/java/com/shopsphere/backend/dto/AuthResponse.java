package com.shopsphere.backend.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthResponse {
    private String token;
    private Long id;
    private String username;
    private String email;
    private String role;
}