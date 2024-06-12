package com.codecool.backend.service;

import com.codecool.backend.model.Event;
import com.codecool.backend.model.dto.EventDTO;
import com.codecool.backend.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public Event saveEvent(EventDTO event) {
        Event newEvent = new Event();
        newEvent.setName(event.getName());
        newEvent.setDate(event.getDate());
        newEvent.setType(event.getType());
        newEvent.setDescription(event.getDescription());
        return this.eventRepository.save(newEvent);
    }
}
