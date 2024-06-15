import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventModel } from '../event.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [NgIf],
  providers: [EventService],
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
      let id: string = params['id'];
      this.eventService.getEventById(id).subscribe((event) => {
        this.actualEvent = event;
      });
    });
  }
}
