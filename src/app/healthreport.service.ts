import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Healthreport } from './Healthreport';



@Injectable({
  providedIn: 'root'
})
export class HealthreportService {

  constructor(private http:HttpClient) { }

    // urls
    submitobjecturl:string="http://localhost:7075/pdms/healthreportrepository/healthreportregister";

    //return appintment object
    registerappointment(appointmentobject:Healthreport):Observable<any>{
     return  this.http.post<any>(this.submitobjecturl,appointmentobject);
    }
}
