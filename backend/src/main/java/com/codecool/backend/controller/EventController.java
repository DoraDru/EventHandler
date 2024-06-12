package com.codecool.backend.controller;

import com.codecool.backend.model.Event;
import com.codecool.backend.model.dto.EventDTO;
import com.codecool.backend.service.EventService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("")
    public List<Event> getEvents(){
        return this.eventService.getEvents();
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id){
        return this.eventService.getEvent(id);
    }

    @PostMapping("")
    public Event addEvent(@RequestBody EventDTO event) {
        return this.eventService.saveEvent(event);
    }
}
