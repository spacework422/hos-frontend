import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Doctor';
import { DoctorserviceService } from 'src/app/doctorservice.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
  constructor(private dc:DoctorserviceService, private router: Router ) { }
  ngOnInit(): void {
  }

  usernameh:string='';
  passwordh:string='';
  invalidLogin=false
  errorMessage='Invalid Credentials';
  doctorlogindata:Doctor='';

  signinmethod(){
    this.doctorlogindata ={
      "username":this.usernameh,
      "password":this.passwordh
    } 
    this.dc.doctorlogincheckmethod(this.doctorlogindata).subscribe((res)=>{
      if(res==true){
        sessionStorage.setItem('doctorloginusername', this.usernameh);
        this.router.navigate(['/doctorpanel/doctorhealth']);
      }
      else{
        this.invalidLogin=true
      }
    })
  }

}
