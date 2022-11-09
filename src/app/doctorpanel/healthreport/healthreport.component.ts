import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HealthreportService } from 'src/app/healthreport.service';

@Component({
  selector: 'app-healthreport',
  templateUrl: './healthreport.component.html',
  styleUrls: ['./healthreport.component.css']
})
export class HealthreportComponent implements OnInit {
  constructor(private hr:HealthreportService,private route:Router) { }

  ngOnInit(): void {
    this.gethealthreportsall();
  }
  listofhealthreport:Array<any>=[];

  gethealthreportsall(){
     this.listofhealthreport=[];
      this.hr.getallhealthreports().subscribe((res)=>{
        res.forEach((r:any)=>{
         if(r.patientselecteddoctorname == sessionStorage.getItem('doctorloginusername') && r.doctorverified == false ){ 
         this.listofhealthreport.push(r);
         }
        })
      })
  }


  viewhealthreport(idofhealthreport:number){
    sessionStorage.setItem('viewformid',idofhealthreport.toString())
    this.route.navigate(['doctorpanel/doctorviewform']);
  }
}
