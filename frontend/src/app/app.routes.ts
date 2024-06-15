import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent,
    children: [
      { path: ':id', component: EventDetailComponent },
      { path: 'new', component: EventDetailComponent },
      { path: ':id/edit', component: EventDetailComponent },
    ],
  },
];

