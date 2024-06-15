import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';
import { ShortenTextPipe } from '../pipes/shorten.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgFor, ShortenTextPipe, RouterLink],
  providers: [EventService],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events: EventModel[] = [];

  constructor(private service: EventService) {}

  ngOnInit(): void {
    this.service.getEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
