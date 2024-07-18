package com.codecool.backend.repository;

import com.codecool.backend.model.event.Event;
import com.codecool.backend.model.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    Optional<Event> getEventById(Long id);
    List<Event> getEventsByUser(UserEntity user);

}
