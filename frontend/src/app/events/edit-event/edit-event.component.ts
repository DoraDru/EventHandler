import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventService } from '../event.service';
import { DatePipe, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventModel } from '../event.model';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
})
export class EditEventComponent implements OnInit {
  todayDate;
  form!: FormGroup;
  eventTypes: string[] = [];
  eventId?: number;
  editedEvent?: EventModel;

  constructor(
    private service: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.todayDate = new Date().toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.service.getEventTypes().subscribe((types) => {
      this.eventTypes = types;
    });

    this.route.params.subscribe((params: Params) => {
      this.eventId = +params['id'];
      this.initForm();
      if (this.eventId) {
        this.loadEvent();
      }
    });
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  private loadEvent() {
    if (this.eventId) {
      this.service.getEventById(this.eventId).subscribe((event) => {
        this.editedEvent = event;
        if (this.editedEvent) {
          const datePipe = new DatePipe('en-US');
          const formattedDate = datePipe.transform(
            this.editedEvent.date,
            'yyyy-MM-dd'
          );
          const event = { ...this.editedEvent, date: formattedDate };
          this.form.patchValue(event);
        }
      });
    }
  }

  onSubmit() {
    this.service.addEvent(this.form.value);
    this.router.navigate(['/']);
  }

  onClear() {
    this.form.reset();
  }

  onCancel() {
    this.onClear();
    this.router.navigate(['/']);
  }
}
