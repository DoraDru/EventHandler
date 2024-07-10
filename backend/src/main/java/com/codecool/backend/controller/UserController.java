package com.codecool.backend.controller;

import com.codecool.backend.model.dto.UserDTO;
import com.codecool.backend.security.jwt.JwtUtils;
import com.codecool.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    private final PasswordEncoder encoder;
    private final AuthenticationManager authManager;
    private final JwtUtils jwtUtils;

    public UserController(UserService userService, PasswordEncoder encoder, AuthenticationManager authManager, JwtUtils jwtUtils) {
        this.userService = userService;
        this.encoder = encoder;
        this.authManager = authManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody UserDTO user) {
        user.setPassword(encoder.encode(user.getPassword()));
        if (userService.register(user)) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
    }
}
