import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService{
    baseUrl="http://localhost:8081";

    constructor(private http:HttpClient){

    }

    registerNewUser(user: UserService):Observable<UserService>{
        return this.http.post<UserService>(this.baseUrl+"/user",user);
    }

    searchFriend(name: string) {
        return this.http.get<User[]>(this.baseUrl + "/search/" + name);
    }

    sendRequest(myEmail: string, friendEmail:string){
     
        return this.http.get<UserService>(this.baseUrl + "/update/" +myEmail+
        "/" +friendEmail);
    }

    fetchUserDetails(mail: string){
        return this.http.get<User>(this.baseUrl + "/details/" + mail);
    }
    
    confirmRequest(myEmail1: string, friendEmail1:string){
        return this.http.get<UserService>(this.baseUrl + "/confirm/" +myEmail1+
        "/" +friendEmail1);
    }

    deleteRequest(myEmail1: string, friendEmail1:string){
        return this.http.get<UserService>(this.baseUrl+ "/delete/"+ myEmail1+"/"+friendEmail1);
    }
}