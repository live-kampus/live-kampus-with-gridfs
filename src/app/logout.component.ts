import { Component } from '@angular/core';
import { AuthenticateService } from './user-authenticate.service';
import { Router } from '@angular/router';

@Component({

    templateUrl:"./logout.component.html"
})
export class LogoutComponent {

    constructor(private authenticateService:AuthenticateService ,private router:Router){}

     ngOnInit(){
        this.authenticateService.logOut();
        this.router.navigate([""]);

     }

}