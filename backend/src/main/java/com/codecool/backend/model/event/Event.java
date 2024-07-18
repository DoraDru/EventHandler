package com.codecool.backend.model.event;

import com.codecool.backend.model.user.UserEntity;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private LocalDate date;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EventType type;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ManyToOne
    private UserEntity user;

    public void setName(String name) {
        this.name = name;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setType(EventType type) {
        this.type = type;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public LocalDate getDate() {
        return date;
    }

    public EventType getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public UserEntity getUser() {
        return user;
    }
}
