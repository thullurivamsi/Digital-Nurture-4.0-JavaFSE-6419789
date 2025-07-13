package com.example.jwtauth.controller;

import com.example.jwtauth.dto.JwtAuthenticationResponse;
import com.example.jwtauth.service.JwtTokenProvider;
import com.example.jwtauth.service.UserService;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    public AuthController(JwtTokenProvider jwtTokenProvider, UserService userService) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
    }

    @PostMapping("/authenticate")
    public JwtAuthenticationResponse authenticate(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new AuthenticationCredentialsNotFoundException("Authentication failed");
        }

        String username = authentication.getName();
        UserDetails userDetails = userService.loadUserByUsername(username);
        String token = jwtTokenProvider.generateToken(userDetails);
        return new JwtAuthenticationResponse(token);
    }
}
