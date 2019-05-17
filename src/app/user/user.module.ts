import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './Friends/friends.component';
import { UserEventlistComponent } from './event/user-event-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { RoomSpaceComponent } from './Room-space/room-space.component';
import { EventService } from './event/event.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile/profile.service';
import { HomeService } from './home/home.service';
import { EditProfileComponent } from './profile/edit-profile.component';
import { UserService } from './user.service';







@NgModule({
    declarations: [
        UserComponent,
        HomeComponent,
        ProfileComponent,
        FriendsComponent,
        UserEventlistComponent,
        NotificationComponent,
        ChatComponent,
        RoomSpaceComponent,
        EditProfileComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        RouterModule.forChild(userRoutes),
        HttpClientModule,

    ],
    providers:[
        EventService,
        ProfileService,
        HomeService,
        UserService
    ],
    exports: [
        UserComponent,
        RouterModule,
    ]
})
export class UserModule {
}
