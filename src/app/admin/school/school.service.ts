import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schools } from './school';
import { Observable } from 'rxjs';

@Injectable()
export class SchoolService {

    baseUrl="http://localhost:8088";

    constructor(private http:HttpClient){}


    findSchool():Observable<Schools[]>{
        return this.http.get<Schools[]>(this.baseUrl+"/school" );
    }

    findSchoolById(schoolId:number): Observable<Schools> {
        return this.http.get<Schools>(this.baseUrl+"/school/"+schoolId);
    }

    addNewSchool(school:Schools):Observable<Schools[]>{
        return this.http.post<Schools[]>(this.baseUrl+"/school",school);
    }

    editSchool(school:Schools):Observable<Schools>{
        return this.http.put<Schools>(this.baseUrl+"/school",school)
    }

    deleteSchoolById(schoolId:number):Observable<Schools>{
        return this.http.delete<Schools>(this.baseUrl+"/school/"+schoolId);
    }
 
}