
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { SchoolListComponent } from './school/school-list.component';
import { UserDetailsComponent } from './users/users-details.component';
import { UserListComponent } from './users/users-list.component';
import { RoomSpaceComponent } from './roomspace/roomspace.component';
import { CityListComponent } from './city/city-list.component';
import { EventListComponent } from './event/event-list.component';
import { NotificationComponent } from './notification/notification.component';
import { EventDetailsComponents } from './event/event-details.component';
import { UserService } from './users/user.service';
import { FormsModule } from '@angular/forms';
import { CityService } from './city/city.service';
import { SchoolService } from './school/school.service';
import { EventService } from './event/event.service';
import { ProfileComponent } from '../user/profile/profile.component';

@NgModule({
    declarations: [
        AdminComponent,
        SchoolListComponent,
        UserDetailsComponent,
        UserListComponent,
        UserDetailsComponent,
        RoomSpaceComponent,
        CityListComponent,
        EventListComponent,
        EventDetailsComponents,
        NotificationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(adminRoutes),
        FormsModule,
    ],
    exports: [
        AdminComponent,
        RouterModule
    ],
    providers: [
        UserService,
        CityService,
        SchoolService,
        EventService
    ]
})
export class AdminModule {

}