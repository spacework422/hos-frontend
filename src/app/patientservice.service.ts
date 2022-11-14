import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Patient } from './Patient';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  constructor(private http:HttpClient) { }
  globalurltype=environment.globalurl;
  // baseurl for patient only
  patientgetbyid:string=`http://${this.globalurltype}:7075/pdms/patientcontroller/getbyid/`;
  patientalldata:string = `http://${this.globalurltype}:7075/pdms/patientcontroller/getpatient`;
  patientregister:string = `http://${this.globalurltype}:7075/pdms/patientcontroller/patientregister`;
  patientlogin:string=`http://${this.globalurltype}:7075/pdms/patientcontroller/userlogin`;
 
  //get all patients details
  allpatientsdata(){
    return this.http.get(this.patientalldata);
  }
  //get by id
  getpatientbyid(param:number){
  return this.http.get(`http://${this.globalurltype}:7075/pdms/patientcontroller/getbyid/${param}`);
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
