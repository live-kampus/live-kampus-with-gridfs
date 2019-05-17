import { Component } from '@angular/core';
import { Login } from '../welcome-login';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    user:Login;

    constructor(){

        this.user=JSON.parse(sessionStorage.getItem("user"));
        console.log(this.user);
    }

    
}
