import { Component, OnInit } from '@angular/core';
import { Schools } from './school';
import { SchoolService } from './school.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    // selector:"school-list",
    templateUrl: './school-list.component.html',
    styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

    school: Schools;
    schools: Schools[];
    constructor(private schoolService: SchoolService,
        private route: Router) { }
        ngOnInit(): void {
                this.school= new Schools();
                this.schoolService.findSchool().subscribe((data) => {
                    this.schools = data;
                    console.log(data);

                });
            }

        viewbtn(schoolId: number) {
            this.schoolService.findSchoolById(schoolId).subscribe((data)=>{
                this.school = data;
            });
        }
    
        addSchool(){
            this.schoolService.addNewSchool(this.school).subscribe((data)=>{
                if(data!=null){
                    alert("School added succesfully");
                    this.route.navigate['./admin/schoollist'];
                    var element = document.getElementById("addSchool");
                    element.classList.remove("show");
                    document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
                    location.reload(true);
                }
            })
        }
        editbtn(schoolId:number){
            this.schoolService.findSchoolById(schoolId).subscribe((data)=>{
             this.school=data;
            })
          }

          updateSchool(){
            this.schoolService.editSchool(this.school).subscribe((data)=>{
              if(data!=null){
                alert("School updated Sucessfully.");
                var element = document.getElementById("editModal");
                element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
                this.route.navigate['/admin/schoollist'];
                location.reload(true);
              }
            });
      }

      deleteSchool(school:Schools){
        this.schoolService.deleteSchoolById(school.schoolId).subscribe((data)=>{
          this.route.navigate['/admin/schoollist'];
          location.reload(true);
        })
      }
    }