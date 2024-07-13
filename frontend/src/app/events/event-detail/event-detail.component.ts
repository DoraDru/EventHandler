import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventModel } from '../event.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent implements OnInit {
  actualEvent!: EventModel;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      this.eventService.getEventById(id).subscribe({
        next: (data) => {
          this.actualEvent = data;
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.router.navigate(['/error-page']);
          }
        },
      });
    });
  }

  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete(): void {
    if (confirm('Are you sure to delete this event?')) {
      this.eventService.deleteEvent(this.actualEvent.id).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.router.navigate(['/error-page']);
        },
      });
    }
  }
}
