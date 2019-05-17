import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './Friends/friends.component';
import { UserEventlistComponent } from './event/user-event-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { RoomSpaceComponent } from './Room-space/room-space.component';
import { LogoutComponent } from '../logout.component';
import { EditProfileComponent } from './profile/edit-profile.component';


export const userRoutes: Routes = [
    {path: 'user', component: UserComponent,
    children: [
        {path:'', component: HomeComponent},
        {path:'profile', component: ProfileComponent},
        {path:'friends', component: FriendsComponent},
        {path:'events', component: UserEventlistComponent},
        {path:'notifications', component: NotificationComponent},
        {path:'chat', component: ChatComponent},
        {path:'roomspace', component: RoomSpaceComponent},
        {path: 'profile/editprofile', component: EditProfileComponent}


    ]
},{path: 'logout', component: LogoutComponent}
];

