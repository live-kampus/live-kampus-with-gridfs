import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../profile/profile';
import { ProfileService } from '../profile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    profile:UserProfile[];

    constructor(private profileService:HomeService,private route:ActivatedRoute){}

    ngOnInit(){
        this.profileService.getprofiles().subscribe((data)=>{
            console.log(data);
          this.profile = data;
        },err=>{
            console.log(err);
        })
}
}
