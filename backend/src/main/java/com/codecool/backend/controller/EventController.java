package com.codecool.backend.controller;

import com.codecool.backend.model.Event;
import com.codecool.backend.model.dto.EventDTO;
import com.codecool.backend.service.EventService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("")
    public Event addEvent(@RequestBody EventDTO event) {
        return this.eventService.saveEvent(event);
    }
}
