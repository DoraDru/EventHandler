package com.codecool.backend.repository;

import com.codecool.backend.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    Event getEventById(Long id);
}
