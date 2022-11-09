import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorserviceService } from 'src/app/doctorservice.service';
import { Healthreport } from 'src/app/Healthreport';
import { HealthreportService } from 'src/app/healthreport.service';

@Component({
  selector: 'app-loggedpage-appointment',
  templateUrl: './loggedpage-appointment.component.html',
  styleUrls: ['./loggedpage-appointment.component.css']
})
export class LoggedpageAppointmentComponent implements OnInit {
  ngOnInit(): void {
    this.nameh=sessionStorage.getItem('patientloginname')!;
  }
  constructor(private dc:DoctorserviceService, private appo:HealthreportService) { }
  streamslist:Array<any>=[];
  doctorslist:Array<any>=[];
  //appointment object variable
  nameh:string='';
  emailh:string='';
  hospitalh:string='';
  streamh:string='';
  doctorh:string='';
  symptomsh:string='';
  appointmentform:Healthreport ='';


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
      if(singleobject.specialization == streamvalue){
       this.doctorslist.push(singleobject);  
      }
    });
    }

    submitedappointment(form:NgForm){
      this.appointmentform={
        "patientname":this.nameh,
        "patientemail":this.emailh,
        "patientselectedstream":this.streamh,
        "patientselectedhospital":this.hospitalh,
        "patientselecteddoctorname":this.doctorh,
        "patientsymptoms":this.symptomsh,
      };
       this.appo.registerappointment(this.appointmentform).subscribe((res)=>{
        alert("submitted");
        form.reset();
       })
    }

  }


