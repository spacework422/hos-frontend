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
    submitobjecturl:string="http://18.222.231.58:7075/pdms/healthreportrepository/healthreportregister";
    allhealthreports:string="http://18.222.231.58:7075/pdms/healthreportrepository/getallhealthreport";


    //retrun all health reports
    getallhealthreports():Observable<any>{
      return this.http.get<any [] >(this.allhealthreports);
    }
    //updatae doctor prescption
    updatedoctorpre(id:number,updatedbody:Healthreport){
     return  this.http.put(`http://18.222.231.58:7075/pdms/healthreportrepository/healthrecordupdate/${id}`,updatedbody);
    }

    //return appintment object
    registerappointment(appointmentobject:Healthreport):Observable<any>{
     return  this.http.post<any>(this.submitobjecturl,appointmentobject);
    }
}
