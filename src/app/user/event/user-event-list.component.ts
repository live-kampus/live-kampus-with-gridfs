import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEvent } from './user-event';
import { UserUploadImages } from '../profile/uploadImages';
import { DomSanitizer } from '@angular/platform-browser';
import { FileResource } from '../profile/FileResource';

@Component({
    templateUrl: './user-event-list.component.html',
    styleUrls: ['./user-event-list.component.css']
})
export class UserEventlistComponent implements OnInit {


    event: UserEvent;
    events: UserEvent[];
    file: FileResource[];
    images: UserUploadImages;
    // url: object[] = [];
    url: Object;
    url2: object[] = [];
    selectedFile: File;

    constructor(private eventService: EventService,
        private route: Router,private sanitizer: DomSanitizer) { }

    ngOnInit(): void {


        this.event = new UserEvent();
        this.eventService.findAll().subscribe((data) => {
            this.events = data;
            console.log(data);
        });

        this.images = new UserUploadImages();

        let user3 = JSON.parse(sessionStorage.getItem('user'));
        let myEmail = user3.email;
        // this.eventService.fetch(myEmail).subscribe((data) => {
        //     var newBlob = new Blob([data], { type: "application/json" });
        //     console.log(newBlob);
        //     const x = window.URL.createObjectURL(newBlob);
        //     // this.url.push(this.sanitizer.bypassSecurityTrustUrl(x));
        //     this.url=this.sanitizer.bypassSecurityTrustUrl(x);
        //     console.log(data);
        //     console.log(this.url);
        //     console.log(x);
        // });

    }

    onFileSelected(event) {
        console.log(event);
        this.selectedFile = <File>event.target.files[0];
       // alert("divya")
       // alert(sessionStorage.getItem('city'))
        let user3 = JSON.parse(sessionStorage.getItem('user'));
        let myEmail = user3.email;
        alert(myEmail);
        //alert(sessionStorage.getItem("email"))
      //  alert(JSON.parse(JSON.stringify(sessionStorage.getItem('myEmail'))))
        const fd = new FormData();
        fd.append('filePath', this.selectedFile, this.selectedFile.name);
        fd.append('myEmail', myEmail);

        alert(fd.get('myEmail'));
        alert(this.selectedFile.name);
        this.eventService.uploadImages(fd).subscribe((data) => {
            console.log(event);
        });
        this.eventService.fetch(myEmail).subscribe((data) => {
            var newBlob = new Blob([data], { type: "application/json" });
            console.log(newBlob);
            const x = window.URL.createObjectURL(newBlob);
            // this.url.push(this.sanitizer.bypassSecurityTrustUrl(x));
            this.url=this.sanitizer.bypassSecurityTrustUrl(x);
            console.log(data);
            console.log(this.url);
            console.log(x);
        });

    }

    addNewEvents() {

        console.log("success");
        // this.event.eventPicture=document.getElementById("myfile").files[0].path;
        this.eventService.addNewEvent(this.event).subscribe((data) => {
            console.log(this.event);
            console.log("success");
            if (data != null) {
                alert("Registration is Sucessful.");
                this.route.navigate["/user/events"];
                var element = document.getElementById("addEvent");
                element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
                
               

            }
        })
    }

    eventR(eventName:string){
        
        this.eventService.getEventByName(eventName).subscribe((data) =>{
            this.event = data;
        })
    }

    // url:any;

    // readUrl(files) {
    //     this.event.eventPicture = files[0];
    // }
    
    
}
