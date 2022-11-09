import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from 'src/app/drug.service';
import { HealthreportService } from 'src/app/healthreport.service';

@Component({
  selector: 'app-patientviewform',
  templateUrl: './patientviewform.component.html',
  styleUrls: ['./patientviewform.component.css']
})
export class PatientviewformComponent implements OnInit {
  constructor(private hr:HealthreportService,private router:Router, private dr:DrugService) { }
  ngOnInit(): void {
   this.startingfunction();
  }
  nameh:string='';
  emailh:string='';
  symptomsh:string='';
  prescptionh:string='';

  //for drug pharma
  drugobjectotpass:any=''
  count:string='';
  pharmasistname:string='';

  startingfunction(){
    this.hr.getallhealthreports().subscribe((res)=>{
      res.forEach((r:any)=>{
        if(r.id==Number(sessionStorage.getItem('patientviewform'))){
           this.nameh=r.patientname;
           this.emailh=r.patientemail;
           this.symptomsh=r.patientsymptoms;
           this.prescptionh=r.doctorprescption;
        }
      })
    })
  }


  orderfunction(){
    this.drugobjectotpass={
      "pname":this.nameh,
      "phaname":this.pharmasistname,
      "orderDetails":this.prescptionh,
      "quantity":this.count
    }
    this.dr.submissionmethod(this.drugobjectotpass).subscribe((res)=>{
      alert("submited")
      
    })
  }

  backfunction(){
    this.router.navigate(['/loggedstartpage/loggedpage-prescription']);
  }

}
