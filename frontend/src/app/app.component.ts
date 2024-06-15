import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { EventService } from './events/event.service';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events/events.component';
import { HomeComponent } from './home/home.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    NgIf,
    NgFor,
    HeaderComponent,
    EventsComponent,
    HomeComponent,
    EventDetailComponent,
    EditEventComponent
  ],
  providers: [EventService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
