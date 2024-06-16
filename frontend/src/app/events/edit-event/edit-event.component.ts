import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventService } from '../event.service';
import { LowerCasePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, LowerCasePipe],
  providers: [EventService],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css',
})
export class EditEventComponent implements OnInit {
  form!: FormGroup;
  eventTypes: string[] = [];

  constructor(private service: EventService, private router: Router) {}

  ngOnInit(): void {
    this.service.getEventTypes().subscribe((types) => {
      this.eventTypes = types;
    });

    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });
  }

  onSubmit() {
    this.service.addEvent(this.form.value);
    this.router.navigate(['/']);
  }

  onClear() {
    this.form.reset();
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
