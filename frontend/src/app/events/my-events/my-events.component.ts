import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../event.model';
import { EventService } from '../event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.css',
})
export class MyEventsComponent {
  myEvents$: Observable<EventModel[]>;

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myEvents$ = this.eventService.getEventsByUser();
  }

  onEdit(id: number): void {
    this.router.navigate([`../${id}/edit`], { relativeTo: this.route });
  }

  onDelete(id: number): void {
    if (confirm('Are you sure to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe({
        next: () => {
          this.router.navigate(['/events/myevents']);
        },
        error: () => {
          this.router.navigate(['/error-page']);
        },
      });
    }
  }
}
