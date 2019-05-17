import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { AppComponent } from '../app.component';


export const registrationRoute: Routes=[
    {path: 'signup',component: RegistrationComponent},
    {path: 'home',component: AppComponent}

]