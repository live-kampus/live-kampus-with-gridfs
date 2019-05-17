import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEvent } from './user-event';
import { UserUploadImages } from '../profile/uploadImages';

@Injectable()
export class EventService{
    
    baseUrl = "http://localhost:8085/";
    baseUrl1="http://localhost:9020/event/"

    constructor(private http:HttpClient){}

    // findBookBycatagory(category:string):Observable<Event[]>{
    //     return this.http.get<Event[]>(this.baseUrl +"books/"+category);
    // }

    
    findAll(): Observable<UserEvent[]> {
        return this.http.get<UserEvent[]>(this.baseUrl + "event");
    }

    addNewEvent(event:UserEvent):Observable<UserEvent>{
        return this.http.post<UserEvent>(this.baseUrl + "event",event);
    }

    getEventByName(eventName:string):Observable<UserEvent>{
        return this.http.get<UserEvent>(this.baseUrl + "event/" + eventName) 
    }

    uploadImages(fd:FormData):Observable<UserUploadImages>{
        alert(fd.get("email"));
        return this.http.post<UserUploadImages>(this.baseUrl1+"event/"+"upload/"+fd.get("myEmail"),fd);
    }

    fetch(email:String):Observable<Blob>{
            return this.http.get(this.baseUrl1+"save/"+email, {responseType: 'blob'});
        }

}   