package com.codecool.backend.service;

import com.codecool.backend.errorhandling.event.InvalidEventException;
import com.codecool.backend.model.event.Event;
import com.codecool.backend.model.event.EventDTO;
import com.codecool.backend.model.user.UserEntity;
import com.codecool.backend.repository.EventRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventService {
    private final EventRepository eventRepository;
    private final UserService userService;

    @Autowired
    public EventService(EventRepository eventRepository, UserService userService) {
        this.eventRepository = eventRepository;
        this.userService = userService;
    }

    public List<Event> getEvents() {
        return this.eventRepository.findAll();
    }

    public List<EventDTO> getEventsByUser(String userName){
        UserEntity user = userService.getUserByName(userName);
        List<Event> events  = eventRepository.getEventsByUser(user);
        return events.stream().map(event -> {
            EventDTO eventDto = new EventDTO();
            eventDto.setDate(event.getDate());
            eventDto.setName(event.getName());
            eventDto.setType(event.getType());
            eventDto.setDescription(event.getDescription());
            eventDto.setOwnerName(event.getUser().getName());
            return eventDto;
        }).collect(Collectors.toList());
    }

    public Event getEvent(Long id) {
        return getEventById(id);
    }

    public Event saveEvent(EventDTO event, String userName) {
        UserEntity user = userService.getUserByName(userName);

        Event newEvent = new Event();
        newEvent.setName(event.getName());
        newEvent.setDate(event.getDate());
        newEvent.setType(event.getType());
        newEvent.setDescription(event.getDescription());
        newEvent.setUser(user);
        return this.eventRepository.save(newEvent);
    }

    public Event updateEvent(Long id, Event event, String userName) {
        UserEntity user = userService.getUserByName(userName);
        if (id == event.getId()){
            Event eventToUpdate = getEventById(id);
            eventToUpdate.setName(event.getName());
            eventToUpdate.setDate(event.getDate());
            eventToUpdate.setType(event.getType());
            eventToUpdate.setDescription(event.getDescription());

            return this.eventRepository.save(eventToUpdate);
        } else {
            throw new IllegalArgumentException("Path variable id does not match the event id.");
        }
    }


    //temporary
    public void saveEvents(List<EventDTO> events) {
        for (EventDTO event : events) {
            Event newEvent = new Event();
            newEvent.setName(event.getName());
            newEvent.setDate(event.getDate());
            newEvent.setType(event.getType());
            newEvent.setDescription(event.getDescription());
            this.eventRepository.save(newEvent);
        }
    }

    @Transactional
    public void deleteEvent(Long id) {
        Event event = getEventById(id);
        this.eventRepository.delete(event);
    }

    private Event getEventById(Long id) {
        Optional<Event> event = this.eventRepository.getEventById(id);

        if (event.isPresent()) {
            return event.get();
        } else {
            throw new InvalidEventException(String.format("Event doesn't exist with id: %s", id));
        }
    }
}
