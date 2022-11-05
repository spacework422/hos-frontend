import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
  constructor(private ps:PatientserviceService,private router: Router) { }
  ngOnInit(): void {

  }
  nameh:string='';
  passwordh:string='';
  bloodgrouph:string='';
  ageh:string='';
  phonenumberh:string='';
  weighth:string='';
  patientdata:Patient='';


 submitdata(){
    this.patientdata ={
    "name":this.nameh,
    "password":this.passwordh,
    "patientbloodgroup":this.bloodgrouph,
    "age":Number(this.ageh),
    "phoneno":Number(this.phonenumberh),
    "patientweight":Number(this.weighth)
   }
   this.ps.patientpostmethod(this.patientdata).subscribe((responsedata)=>{
    console.log(responsedata);
    this.router.navigate(['/loggedstartpage']); 
   });
 }

}
