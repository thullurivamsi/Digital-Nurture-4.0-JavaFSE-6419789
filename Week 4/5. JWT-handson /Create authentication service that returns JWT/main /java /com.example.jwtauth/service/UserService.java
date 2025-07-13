package com.example.jwtauth.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserService implements UserDetailsService {
    private final Map<String, UserDetails> users = Map.of(
            "user", User.withUsername("user")
                    .password("{noop}pwd") // {noop} prefix for plain text password
                    .roles("USER")
                    .build()
    );

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails user = users.get(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return user;
    }
}
