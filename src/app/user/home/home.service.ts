import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profiles';
import { User } from '../user';





@Injectable()
export class HomeService{

    user:User;
    baseUrl = "http://localhost:8087/profile/";

    profile1:UserProfile[];

    constructor(private httpclient:HttpClient){}

    getprofiles():Observable<UserProfile[]>{

        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.user);
        let friendsProfile = this.user.friends;

        console.log(friendsProfile);
        

        return this.httpclient.get<UserProfile[]>(this.baseUrl );
    }

    // searchFriend(name: string) {
    //     return this.httpclient.get<User[]>(this.baseUrl + "/search/" + name);
    // }
    
}