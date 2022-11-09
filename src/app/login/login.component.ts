import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private ps:PatientserviceService) { }
  usernameh:string='';
  passwordh:string='';
  invalidLogin=false
  errorMessage='Invalid Credentials';
  patientlogindata:Patient='';

  ngOnInit(): void {
  }


  signinmethod(){
  this.patientlogindata ={
    "name":this.usernameh,
    "password":this.passwordh
  }   
  this.ps.patientloginmethod(this.patientlogindata).subscribe((res)=>{
   if(res==true){
    sessionStorage.setItem('patientloginname',this.usernameh)
    this.router.navigate(['/loggedstartpage/loggedpage-appointment']);
   }
   else{
     this.invalidLogin=true;
   }
  })

  }

   gotoPatientSignup(){
    this.router.navigate(['/patient-signup']);
  }

}
