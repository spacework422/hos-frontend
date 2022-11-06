import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  constructor(private http:HttpClient) { }
  
  //urls
  getalldoctors:string = "http://localhost:7075/hospital/doctorcontroller/getdoctor";
  doctorregister:string = "http://localhost:7075/hospital/doctorcontroller/doctorregister";
  //methods
  // getting all doctors list (returns list of doctor objects)
  getalldoctorsobjects(){
    return this.http.get(this.getalldoctors);
  }
 
  //register doctor method (returns doctor object)
  doctorregisterobject(doctorobject:Doctor){
    return this.http.post(this.doctorregister,doctorobject);
  }

  getdoctorbyid(id:number){
    return this.http.get(`http://localhost:7075/hospital/doctorcontroller/getbyid/${id}`);
  }

  getbystream(streamdata:string):Observable<Doctor []>{
    return this.http.get<Doctor []>(`http://localhost:7075/hospital/doctorcontroller/getbystream/${streamdata}`);
  }

}
