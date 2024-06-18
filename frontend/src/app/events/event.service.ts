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
        return events.map((event) => ({
          ...event,
          date: new Date(event.date),
          id: Number(event.id),
        }));
      })
    );
  }

  getEventTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.url + '/types');
  }

  getEventById(id: number): Observable<EventModel> {
    return this.http.get<EventModel>(`${this.url}/${id}`).pipe(
      map((event) => {
        return {
          ...event,
          date: new Date(event.date),
          id: Number(event.id),
        };
      })
    );
  }

  addEvent(event: {
    name: string;
    date: Date;
    type: string;
    description: string;
  }): void {
    this.http.post(this.url, event).subscribe();
  }

  updateEvent(event: EventModel){
    this.http.put(`${this.url}/${event.id}`, event).subscribe();
  }

  deleteEvent(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
