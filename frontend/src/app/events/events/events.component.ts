import { Component } from '@angular/core';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
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
