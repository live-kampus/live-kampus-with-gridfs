    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminUser } from './admin-user';
import { UserProfile } from './profile';


@Injectable()
export class UserService{

    baseUrl="http://localhost:8087/profile"

    constructor(private httpclient:HttpClient){}

    
    getprofiles():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl);
    }

    findUserById(userId : number): Observable<UserProfile> {
        return this.httpclient.get<UserProfile>(this.baseUrl+ userId);
    }
}