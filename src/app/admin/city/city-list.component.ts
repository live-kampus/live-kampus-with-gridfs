import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { CityService } from './city.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit{
  
  constructor(private cityService: CityService,
    private route: Router) {}

    city:City;
  cities:City[];
  ngOnInit():void{
    //we have to read the route parameters

      this.city= new City();
      this.cityService.findCity().subscribe((data)=>{
        this.cities=data;
    });

  }
    viewbtn(cityId:number){
      this.cityService.findCityById(cityId).subscribe((data)=>{
        this.city=data;
      })
    }


    addCity(){
      console.log("hiii");
      this.cityService.addNewCity(this.city).subscribe((data)=>{
          if(data!=null){
            alert("City added Sucessfully.");
            this.route.navigate['/admin/citylist'];
            var element = document.getElementById("addCity");
                element.classList.remove("show");
                document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
                location.reload(true);
          }
      })
    }

    editbtn(cityId:number){
      this.cityService.findCityById(cityId).subscribe((data)=>{
       this.city=data;
      })
    }
    
    updateCity(){
      this.cityService.editCity(this.city).subscribe((data)=>{
        if(data!=null){
          alert("City updated Sucessfully.");
          var element = document.getElementById("editModal");
          element.classList.remove("show");
          document.querySelector('.modal-backdrop').classList.remove("fade","modal-backdrop");
          this.route.navigate['/admin/citylist'];
          location.reload(true);
        }
      });
}

  deleteCity(city:City){
    this.cityService.deleteCityById(city.cityId).subscribe((data)=>{
      this.route.navigate['/admin/citylist'];
      location.reload(true);
    })
  }
}


