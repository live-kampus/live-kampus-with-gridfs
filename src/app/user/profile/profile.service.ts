// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { UserProfile } from './profile';



// @Injectable()
// export class ProfileService{


//     baseUrl = "http://localhost:8087/profile/";

//     constructor(private httpclient:HttpClient){}

//     getprofile():Observable<UserProfile[]>{
//         return this.httpclient.get<UserProfile[]>(this.baseUrl);
//     }

//     findProfileByEmail(): Observable<UserProfile> {      
//         let emailId=JSON.parse(sessionStorage.getItem('user')); 
//         return this.httpclient.get<UserProfile>(this.baseUrl + emailId.email);
//     }

    
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from './profile';
import { UserUploadImages } from './uploadImages';
import { FileResource } from './FileResource';



@Injectable()
export class ProfileService{

    baseUrl1="http://localhost:8087/profile/"
    baseUrl = "http://localhost:9055/profile/";

    constructor(private httpclient:HttpClient){}

    getprofile():Observable<UserProfile[]>{
        return this.httpclient.get<UserProfile[]>(this.baseUrl1);
    }

    findProfileByUserName(): Observable<UserProfile> {        
        return this.httpclient.get<UserProfile>(this.baseUrl1);

    }

    uploadImages(fd:FormData):Observable<UserUploadImages>{
        alert(fd.get("email"));
        return this.httpclient.post<UserUploadImages>(this.baseUrl+"upload/"+fd.get("myEmail"),fd);
    }

    fetch(email:String):Observable<Blob>{
            return this.httpclient.get(this.baseUrl+"save/"+email, {responseType: 'blob'});
        }
        // fetchAll():Observable<FileResource[]>{
        //     return this.httpclient.get(this.baseUrl+"/retrieve/"+id, {responseType: 'blob'});
        // }

    }