import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Admin } from './Admin';
import { Doctor } from './Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  constructor(private http:HttpClient) { }
  
  //urls
  adminlogincheck:string="http://18.222.231.58:7075/pdms/admincontroller/Adminlogin";
  getalldoctors:string = "http://18.222.231.58:7075/pdms/admincontroller/getalldoctor";
  // deletedoctorbyid:string="localhost:7075/pdms/doctorcontroller/deletedoctorbyid"; 
  doctorregister:string = "http://18.222.231.58:7075/pdms/admincontroller/doctorregistration";
  //methods
  
  // check admin
  adminlogincheckmethod(adminobjectvalue:Admin){
    return this.http.post(this.adminlogincheck,adminobjectvalue);
  }
  // check doctor
  doctorlogincheckmethod(doctorobject:Doctor){
    return this.http.post("http://18.222.231.58:7075/pdms/doctorcontroller/doctorlogin",doctorobject);
  }

  // getting all doctors list (returns list of doctor objects)
  getalldoctorsobjects():Observable<any [] >{
    return this.http.get<any []>(this.getalldoctors);
  }
 
  //register doctor method (returns doctor object)
  doctorregisterobject(doctorobject:Doctor){
    return this.http.post(this.doctorregister,doctorobject);
  }
  //deletedoctorby id 
  deletedoctorbyidmethod(deletableid:Doctor):Observable<any [] >{
    return this.http.post<any []>("http://18.222.231.58:7075/pdms/admincontroller/deletedoctorbyid",deletableid);
  }

  getdoctorbyid(id:number){
    return this.http.get(`http://18.222.231.58:7075/hospital/doctorcontroller/getbyid/${id}`);
  }


}
