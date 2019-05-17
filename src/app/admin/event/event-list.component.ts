import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './event.service';


@Component({
    // selector: 'event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
    
})
export class EventListComponent implements OnInit {
    
    events: Event[];
    
    constructor(private eventService: EventService ,
        private route: ActivatedRoute) { }
        
        
        ngOnInit(): void {
            //we have to read the route parameters
            this.route.paramMap.subscribe((map) => {
                let eventId = Number(map.get('eventId' ));
                console.log(eventId);
                this.eventService.findEventById().subscribe((data) => {
                    this.events = data;
                });
            });
        }

        // delbtn(event:Event){
        //     this.eventService.deleteEventByName(event.eventName).subscribe((data)=>{
        //         location.reload(true);
        //     })
        // }
        
        
    }
    