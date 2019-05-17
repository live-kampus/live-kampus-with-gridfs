import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
            users:User[];//searchfriends
            user4:User;
            user1:User;
            constructor(private friend: UserService){}

            
            
            ngOnInit(){
                this.user4 = new User();
                this.user1 = JSON.parse(sessionStorage.getItem('user'));
                let mail=this.user1.email;
                console.log(mail);
                this.friend.fetchUserDetails(mail).subscribe((data)=>{
                    this.user4 = data;
                    console.log(this.user4);

                });
            }
            search(){
                let name = (<HTMLInputElement>document.getElementById("search")).value;
              //  console.log(name);
                this.friend.searchFriend(name).subscribe((data) => {
                    this.users = data;
                    

                });
            }
            request(friendEmail:any){
                //alert("m")
                //this.user1=new User();
            
                let user3 = JSON.parse(sessionStorage.getItem('user'));

                let myEmail= user3.email;
                //console.log(myEmail);
                //console.log(friendEmail);
                this.friend.sendRequest(myEmail,friendEmail).subscribe((data) => {

                 document.getElementById("addbtn").innerHTML="Request Send";
                });
            }

            confirm(friendEmail1:any){
                let user2 = JSON.parse(sessionStorage.getItem('user'));
                let myEmail1= user2.email;
                this.friend.confirmRequest(myEmail1,friendEmail1).subscribe((data) => {
                    console.log("hiii");
                    document.getElementById("confirm-box").style.display="none";
                    location.reload(true);
                    
                })
            }

            del(friendEmail1:any){
                let user2 = JSON.parse(sessionStorage.getItem('user'));
                let myEmail1= user2.email;
                this.friend.deleteRequest(myEmail1,friendEmail1).subscribe((data)=>{
                    location.reload(true);
                })
            }
}