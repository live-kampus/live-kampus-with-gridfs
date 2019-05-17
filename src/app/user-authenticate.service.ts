import { Injectable } from '@angular/core';
import { LoginService } from './app.service';


@Injectable({
    providedIn:'root'
})
export class AuthenticateService{

constructor(private userservice:LoginService){}

authenticate(flag,email){

    if(flag){
       
        return false;
    }
    else{
        return true;
    }
}

isUserLoggedIn(){
    alert("seesion call");
    let user=sessionStorage.getItem('email')
    console.log(!(user===null))
    console.log(sessionStorage.getItem('email'))
    return (!user===null)
}
logOut(){


    sessionStorage.removeItem('email')
   // alert("logout")
}

    
}