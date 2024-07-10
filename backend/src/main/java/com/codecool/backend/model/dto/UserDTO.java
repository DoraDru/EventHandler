package com.codecool.backend.model.dto;

import com.codecool.backend.model.Role;

import java.util.HashSet;
import java.util.Set;

public class UserDTO {
    private String name;

    private String password;

    private final Set<Role> roles = new HashSet<>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }
}
