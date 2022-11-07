import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Appointment';
import { AppointmentService } from 'src/app/appointment.service';
import { DoctorserviceService } from 'src/app/doctorservice.service';

@Component({
  selector: 'app-loggedpage-appointment',
  templateUrl: './loggedpage-appointment.component.html',
  styleUrls: ['./loggedpage-appointment.component.css']
})
export class LoggedpageAppointmentComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private dc:DoctorserviceService, private appo:AppointmentService) { }
  streamslist:Array<any>=[];
  doctorslist:Array<any>=[];
  //appointment object variable
  nameh:string='';
  emailh:string='';
  hospitalh:string='';
  streamh:string='';
  doctorh:string='';
  symptomsh:string='';
  appointmentform:Appointment='';


  // methods
  hospitalmethod(hospitalvalue:string){
    this.streamslist=[];
    this.doctorslist=[];
    this.dc.getalldoctorsobjects().subscribe((res)=>{ 
      res.forEach((r)=>{
      if(r.hospital == hospitalvalue){
        this.streamslist.push(r); 
      }
      });
    });
  }

  streammethod(streamvalue:string){
    this.doctorslist=[];
    this.streamslist.forEach((singleobject)=>{
      if(singleobject.stream == streamvalue){
       this.doctorslist.push(singleobject);  
      }
    });
    }

    submitedappointment(){
      this.appointmentform={
        "patientname":this.nameh,
        "patientemail":this.emailh,
        "patientselectedstream":this.streamh,
        "patientselectedhospital":this.hospitalh,
        "patientselecteddoctorname":this.doctorh,
        "patientsymptoms":this.symptomsh,
      };
       this.appo.registerappointment(this.appointmentform).subscribe((res)=>{
        console.log(res);
       })
    }

  }


