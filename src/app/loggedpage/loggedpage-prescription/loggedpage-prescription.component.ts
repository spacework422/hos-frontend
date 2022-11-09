import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthreportService } from 'src/app/healthreport.service';
import { PatientserviceService } from 'src/app/patientservice.service';

@Component({
  selector: 'app-loggedpage-prescription',
  templateUrl: './loggedpage-prescription.component.html',
  styleUrls: ['./loggedpage-prescription.component.css']
})
export class LoggedpagePrescriptionComponent implements OnInit {

  constructor(public ps:PatientserviceService, private hr:HealthreportService, private router:Router) { }

  ngOnInit(): void {
    this.startingmethod();
  }
  healthreports:Array<any>=[];

 startingmethod(){
  this.healthreports=[];
  console.log(sessionStorage.getItem('patientloginname'));
  this.hr.getallhealthreports().subscribe((res)=>{
    res.forEach((r:any)=>{
      if(r.patientname==sessionStorage.getItem('patientloginname') && r.doctorverified){
        this.healthreports.push(r);
      }
    })
  });
 }

  viewdoctorprescribe(idnumber:number){
    sessionStorage.setItem('patientviewform',idnumber.toString())
    this.router.navigate(['/loggedstartpage/loggedpage-patientviewform']);
  }


}
