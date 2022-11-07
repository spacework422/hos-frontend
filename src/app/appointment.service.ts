import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './Appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http:HttpClient) { }

  // urls
  submitobjecturl:string="http://localhost:7075/hospital/appointmentcontroller/appointmentregister";

  //return appintment object
  registerappointment(appointmentobject:Appointment):Observable<any>{
   return  this.http.post<any>(this.submitobjecturl,appointmentobject);
  }
}
