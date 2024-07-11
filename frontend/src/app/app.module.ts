import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EventsComponent } from "./events/events/events.component";
import { HomeComponent } from "./home/home.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EditEventComponent } from "./events/edit-event/edit-event.component";
import { EventService } from "./events/event.service";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app.routes";
import { ShortenTextPipe } from "./events/pipes/shorten.pipe";
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    HomeComponent,
    EventDetailComponent,
    EditEventComponent,
    ShortenTextPipe,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EventService, UserService],
  bootstrap: [AppComponent],

})
export class AppModule{

}