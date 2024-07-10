package com.codecool.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

import java.util.HashSet;
import java.util.Set;

@Entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(unique = true, nullable = false)
    private String name;
    @Column(nullable = false)
    @Size(min = 8, max = 12, message = "Password must be between 8-12 character")
    private String password;
    @Enumerated(EnumType.STRING)
    private final Set<Role> roles = new HashSet<>();


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

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

    public boolean add(Role role) {
        return getRoles().add(role);
    }
}
