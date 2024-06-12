package com.codecool.backend.service;

import com.codecool.backend.model.Event;
import com.codecool.backend.model.dto.EventDTO;
import com.codecool.backend.repository.EventRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {
    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getEvents(){
        return this.eventRepository.findAll();
    }

    public Event getEvent(Long id){
        return this.eventRepository.getEventById(id);
    }

    public Event saveEvent(EventDTO event) {
        Event newEvent = new Event();
        newEvent.setName(event.getName());
        newEvent.setDate(event.getDate());
        newEvent.setType(event.getType());
        newEvent.setDescription(event.getDescription());
        return this.eventRepository.save(newEvent);
    }

    @Transactional
    public void deleteEvent(Long id){
        this.eventRepository.deleteEventById(id);
    }
}
