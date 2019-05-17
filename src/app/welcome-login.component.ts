import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './app.service';
import { AuthenticateService } from './user-authenticate.service';
import { Login } from './welcome-login';




@Component({
    templateUrl:'./welcome-login.component.html',
    styleUrls: ['./welcome-login.component.css']
})
export class WelcomeLoginComponent{
    user: Login;
    invalidLogin=false;

  submitted: boolean;

  constructor(private router: Router, private loginService: LoginService , private authenticateService:AuthenticateService) { }

  ngOnInit() {
    this.user = new Login();
  }


  loginUser() {
   // alert("login method");
    //  this.submitted = true;
    console.log("form");
    console.log(this.user);

    let password = (<HTMLInputElement>document.getElementById("password")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;

    
    this.loginService.loginUser(email, password).subscribe((data) => {
          // alert("Login Successful");
          console.log(data);
          // alert(data.email);
          this.user=data;
           if (data != null) {
            this.invalidLogin = this.authenticateService.authenticate(true,email);
            alert('logging in') 
            sessionStorage.setItem('user',JSON.stringify(this.user));
            if(data.email == "admin" && data.password == "admin"){
              this.router.navigate(["admin"]);
            }
            else {
              this.router.navigate(["user"]);
            }
             }
             else
             this.invalidLogin = true;
           })
    
         
  }

}