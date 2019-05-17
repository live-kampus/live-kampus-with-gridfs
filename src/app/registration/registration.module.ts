import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { registrationRoute } from './registration.route';
import { RegistrationService } from './registration.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        FormsModule,
        RouterModule.forChild(registrationRoute),
    ],
    exports: [
        RegistrationComponent,
        RouterModule
    ],
    // tslint:disable-next-line:whitespace
    providers:[
        RegistrationService
    ]
})
export class RegistrationModule{

}
