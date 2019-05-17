import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeLoginComponent } from './welcome-login.component';
import { LogoutComponent } from './logout.component';
import { WelcomeComponent } from './welcome.component';



export const appRoutes: Routes = [
    {path: '', component: WelcomeComponent},
    { path: 'login', component : WelcomeLoginComponent},
    {path: 'home', component: AppComponent},
    {path: 'user', component: AppComponent},
    {path: 'logout', component: LogoutComponent}
];
