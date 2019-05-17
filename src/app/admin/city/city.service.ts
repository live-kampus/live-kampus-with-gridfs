import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';

@Injectable()
export class CityService  {

    baseUrl="http://localhost:8086/"

    constructor(private http:HttpClient){}

    addNewCity(city:City):Observable<City>{
        return this.http.post<City>(this.baseUrl+"city",city)
    }

    findCity():Observable<City[]>{
        return this.http.get<City[]>(this.baseUrl+"city");
    }

    findCityById(cityId:number): Observable<City> {
        return this.http.get<City>(this.baseUrl+"city/"+cityId);
    }


    editCity(city: City):Observable<City>{
        return this.http.put<City>(this.baseUrl+"city",city);
    }

    deleteCityById(cityId:number):Observable<City>{
        return this.http.delete<City>(this.baseUrl+"city/"+cityId);
    }
}