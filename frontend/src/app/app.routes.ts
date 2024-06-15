import { Routes } from '@angular/router';
import { EventsComponent } from './events/events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'new', component: EventDetailComponent },
  { path: ':id/edit', component: EventDetailComponent },
  { path: '**', redirectTo: '' },
];
