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

  
}
