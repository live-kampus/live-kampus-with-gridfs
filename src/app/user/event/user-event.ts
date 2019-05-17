import { Time } from '@angular/common';

export class UserEvent{
    eventName:string;
    eventVenue:string;
    eventDate:string;
    eventTime:Time;
	eventhostedBy:string;
	eventPicture:File = null;
}