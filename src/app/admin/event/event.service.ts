import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EventService {
    baseUrl = 'http://localhost:8085/'

    constructor(private http: HttpClient ) {}
    findEvent(): Observable<Event[]> {

        return this.http.get<Event[]>(this.baseUrl+"event");

    }

    findEventById(): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl+"event");
    }

    deleteEventByName(eventName: string):Observable<Event>{
        return this.http.delete<Event>(this.baseUrl+"event/"+eventName);
    }
}
