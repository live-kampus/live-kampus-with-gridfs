import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { RegistrationModule } from './registration/registration.module';
import { WelcomeLoginComponent } from './welcome-login.component';
import { UserService } from './admin/users/user.service';
import { LogoutComponent } from './logout.component';
import { LoginService } from './app.service';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [
    AppComponent,
   WelcomeLoginComponent,
   LogoutComponent,
   WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    UserModule,
    RegistrationModule,
  
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LoginService,UserService,],
  bootstrap: [
    AppComponent,
    
    
  ]
})
export class AppModule { }
