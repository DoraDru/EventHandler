package com.codecool.backend.controller;

import com.codecool.backend.model.event.Event;
import com.codecool.backend.model.event.EventType;
import com.codecool.backend.model.event.EventDTO;
import com.codecool.backend.security.jwt.AuthTokenFilter;
import com.codecool.backend.security.jwt.JwtUtils;
import com.codecool.backend.service.EventService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {
    private final EventService eventService;
    private final AuthTokenFilter authTokenFilter;
    private final JwtUtils jwtUtils;

    public EventController(EventService eventService, AuthTokenFilter authTokenFilter, JwtUtils jwtUtils) {
        this.eventService = eventService;
        this.authTokenFilter = authTokenFilter;
        this.jwtUtils = jwtUtils;
    }

    @GetMapping("")
    public List<Event> getEvents() {
        return this.eventService.getEvents();
    }

    @GetMapping("/types")
    public List<EventType> getEventTypes() {
        return Arrays.asList(EventType.values());
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable Long id) {
        return this.eventService.getEvent(id);
    }

    @PostMapping("")
    public Event addEvent(@RequestBody EventDTO event, HttpServletRequest request) {
        String jwt = this.authTokenFilter.parseJwt(request);
        String userName = this.jwtUtils.getUserNameFromJWTToken(jwt);

        return this.eventService.saveEvent(event, userName);
    }

    //temporary
    @PostMapping("/more")
    public void addEvent(@RequestBody List<EventDTO> events) {
        this.eventService.saveEvents(events);
    }

    @PutMapping("/{id}")
    public Event updateEvent(@PathVariable Long id, @RequestBody Event event) {
        return this.eventService.updateEvent(id, event);
    }

    @DeleteMapping("/{id}")
    public void deleteEvent(@PathVariable Long id) {
        this.eventService.deleteEvent(id);
    }
}
