import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable()
export class RegistrationService{
    baseUrl="http://localhost:8081";

    constructor(private http:HttpClient){

    }

    registerNewUser(user: Registration):Observable<Registration>{
        return this.http.post<Registration>(this.baseUrl+"/signUp",user);
    }

}