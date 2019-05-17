import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SchoolListComponent } from './school/school-list.component';
import { UserListComponent } from './users/users-list.component';
import { RoomSpaceComponent } from './roomspace/roomspace.component';
import { CityListComponent } from './city/city-list.component';
import { EventListComponent } from './event/event-list.component';
import { UserDetailsComponent } from './users/users-details.component';
import { NotificationComponent } from './notification/notification.component';
import { EventDetailsComponents } from './event/event-details.component';

export const adminRoutes: Routes = [
    { path: "admin", component: AdminComponent,
children:[
    {path: "", component: UserListComponent},
    {path: "schoollist", component: SchoolListComponent},
    {path: "userlist", component: UserListComponent},
    {path: "userlist/userdetails", component: UserDetailsComponent},
    {path: "userdetails", component: UserDetailsComponent},
    {path: "roomspace", component: RoomSpaceComponent},
    {path: "citylist", component:CityListComponent},
    {path: "eventlist", component:EventListComponent},
    {path: "eventlist/eventdetails", component: EventDetailsComponents},
    {path: "notification", component:NotificationComponent}

] }
];