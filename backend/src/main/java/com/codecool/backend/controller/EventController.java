package com.codecool.backend.controller;

import com.codecool.backend.model.Event;
import com.codecool.backend.model.EventType;
import com.codecool.backend.model.dto.EventDTO;
import com.codecool.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("")
    public List<Event> getEvents() {
        return this.eventService.getEvents();
    }

    @GetMapping("/types")
    public List<EventType> getEventTypes(){
        return Arrays.asList(EventType.values());
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id) {
        return this.eventService.getEvent(id);
    }

    @PostMapping("")
    public Event addEvent(@RequestBody EventDTO event) {
        return this.eventService.saveEvent(event);
    }

    //temporary
    @PostMapping("/more")
    public void addEvent(@RequestBody List<EventDTO> events) {
        this.eventService.saveEvents(events);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        this.eventService.deleteEvent(id);
    }
}
