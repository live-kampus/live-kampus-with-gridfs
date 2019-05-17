import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from './profile';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    // selector:'user-list',
    templateUrl:'./users-list.component.html',
    styleUrls:['./users-list.component.css']
})
export class UserListComponent{

    profile:UserProfile[];

    constructor(private profileService:UserService,private route:ActivatedRoute){}

    ngOnInit(){
        this.profileService.getprofiles().subscribe((data)=>{
            console.log(data);
            this.profile=data;
        },err=>{
            console.log(err);
        })
}

}