import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from './profile';

@Component({
    selector:'user-details',
    templateUrl:'./users-details.component.html',
    styleUrls:['./users-details.component.css']
})
export class UserDetailsComponent{


    profile:UserProfile;

    constructor(private userService:UserService,
        private route: ActivatedRoute) { }


        ngOnInit():void{
            //we have to read the route parameters
            this.route.paramMap.subscribe((map)=>{
                let userId=Number(map.get("userId")); 
                console.log(userId); 
                this.userService.findUserById(userId).subscribe((data)=>{
                    this.profile=data;
                    console.log(data);
                })  
            });
            
       
                
                
                }

    // usersdetails= [
    //     {
    //         "name": "Akshay",
    //         "email":"gsdkf@gmail.com",
    //         "contact":1523641256,
    //         "address":"WebGLShaderPrecisionForma",
    //         "city":"",
    //         "state":"",
    //         "gender":"",
    //         "school":"",
    //         "dob":"",
    //         "bio":""
    //     }
    // ]
}