import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Healthreport } from 'src/app/Healthreport';
import { HealthreportService } from 'src/app/healthreport.service';

@Component({
  selector: 'app-doctorviewform',
  templateUrl: './doctorviewform.component.html',
  styleUrls: ['./doctorviewform.component.css']
})
export class DoctorviewformComponent implements OnInit {
  constructor(private hr:HealthreportService,private route:Router) { }
  ngOnInit(): void {
   this.assignvaluesme();
  }
  recordid:number=0;
  nameh:string='';
  emailh:string='';
  symptomsh:string='';
  prescptionh:string='';
  healthrecord:Healthreport='';

  assignvaluesme(){
    this.hr.getallhealthreports().subscribe((res)=>{
      var x = sessionStorage.getItem('viewformid')!;
      var y: number = +x;
      res.forEach((r:any)=>{
      if(r.id == y ){
      this.recordid=r.id
      this.nameh=r.patientname;
      this.emailh=r.patientemail;
      this.symptomsh=r.patientsymptoms;
      this.prescptionh=r.doctorprescption;
      }
      })
    })
  }

  submissionfunciton(){
  this.healthrecord={
    "doctorprescption":this.prescptionh
  }
  this.hr.updatedoctorpre(this.recordid,this.healthrecord).subscribe((res)=>{
    console.log(res)
  })
  this.route.navigate(['/doctorpanel/doctorhealth']);
  }

}
