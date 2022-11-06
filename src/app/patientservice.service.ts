import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Patient } from './Patient';



@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  constructor(private http:HttpClient) { }
  
  // baseurl for patient only
  patientgetbyid:string="http://localhost:7075/hospital/patientcontroller/getbyid/";
  patientalldata:string = "http://localhost:7075/hospital/patientcontroller/getpatient";
  patientregister:string = "http://localhost:7075/hospital/patientcontroller/patientregister";
  patientlogin:string='http://localhost:7075/hospital/patientcontroller/userlogin';
 
  //get all patients details
  allpatientsdata(){
    return this.http.get(this.patientalldata);
  }
  //get by id
  getpatientbyid(param:number){
  return this.http.get(`http://localhost:7075/hospital/patientcontroller/getbyid/${param}`);
  }
  //post method
  patientpostmethod(patientdata:Patient){
    return this.http.post(this.patientregister,patientdata);
  }
  // patient login(return true or false) 
  patientloginmethod(patientlogininfo:Patient){
    return this.http.post(this.patientlogin,patientlogininfo);
  }

}
