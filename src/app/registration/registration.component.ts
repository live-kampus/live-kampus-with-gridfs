import { Component } from '@angular/core';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


    user:Registration;

    constructor(private userService: RegistrationService,
        private router: Router){}

        ngOnInit(){
            this.user = new Registration();
        }

        registerNewUser(){
            alert("registration method");
            this.userService.registerNewUser(this.user).subscribe((data)=>{
                console.log("success");
                if(data!=null){
                    alert("done");
                    this.router.navigate(["/login"]);
                }
                
            });
        }

        xyz(){
           this.router.navigate([""]); 
          }

}