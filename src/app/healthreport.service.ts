import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Healthreport } from './Healthreport';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HealthreportService {

  constructor(private http:HttpClient) { }
    globalurltype=environment.globalurl;
    // urls
    submitobjecturl:string=`http://${this.globalurltype}:7075/pdms/healthreportrepository/healthreportregister`;
    allhealthreports:string=`http://${this.globalurltype}:7075/pdms/healthreportrepository/getallhealthreport`;


    //retrun all health reports
    getallhealthreports():Observable<any>{
      return this.http.get<any [] >(this.allhealthreports);
    }
    //updatae doctor prescption
    updatedoctorpre(id:number,updatedbody:Healthreport){
     return  this.http.put(`http://${this.globalurltype}:7075/pdms/healthreportrepository/healthrecordupdate/${id}`,updatedbody);
    }

    //return appintment object
    registerappointment(appointmentobject:Healthreport):Observable<any>{
     return  this.http.post<any>(this.submitobjecturl,appointmentobject);
    }
}
