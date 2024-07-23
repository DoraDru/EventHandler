import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EventModel } from './event.model';

@Injectable()
export class EventService {
  private url = '/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.url).pipe(
      map((events) => {
        return events.map((event) => this.convertEvent(event));
      })
    );
  }

  getEventsByUser(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.url}/byuser`).pipe(
      map((events) => {
        return events.map((event) => this.convertEvent(event))
      })
    );
  }

  getEventTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/types');
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http
      .get<EventModel>(`${this.url}/${id}`)
      .pipe(map((event) => this.convertEvent(event)));
  }

  addEvent(event: {
    name: string;
    date: Date;
    type: string;
    description: string;
  }): void {
    this.http.post(this.url, event).subscribe();
  }

  updateEvent(event: EventModel): Observable<EventModel> {
    return this.http.put<EventModel>(`${this.url}/${event.id}`, event);
  }

  deleteEvent(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  private convertEvent(event: EventModel) {
    return { ...event, date: new Date(event.date), id: Number(event.id) };
  }
}
