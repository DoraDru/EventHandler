package com.codecool.backend.errorhandling.event;

import com.codecool.backend.controller.EventController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@ControllerAdvice(assignableTypes = {EventController.class})
public class EventControllerAdvice {

    @ResponseBody

    @ExceptionHandler(InvalidEventException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String invalidEventExceptionHandler(InvalidEventException ex) {
        return ex.getMessage();
    }
}
