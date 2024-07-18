import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { MyEventsComponent } from './events/my-events/my-events.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/new', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'events/:id/edit', component: EditEventComponent, canActivate: [AuthGuard] },
  { path: 'events/myevents', component: MyEventsComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: RegistrationComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'error-page', component: ErrorPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
