package com.codecool.backend.model;

import java.util.List;

public record JwtResponse(String jwt, String userName, List<String> roles) {
}
