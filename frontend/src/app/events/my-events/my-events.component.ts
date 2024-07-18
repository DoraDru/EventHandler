import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.css'
})
export class MyEventsComponent {
  myEvents$: Observable<EventModel>;

  constructor(private eventService: EventService){
    this.myEvents$ = this.eventService.
  }
}
