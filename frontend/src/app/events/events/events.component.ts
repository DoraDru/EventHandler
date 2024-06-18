import { Component } from '@angular/core';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  events$: Observable<EventModel[]>;

  constructor(private service: EventService) {
    this.events$ = this.service.getEvents();
  }


}
