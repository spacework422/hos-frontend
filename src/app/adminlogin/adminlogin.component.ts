import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  constructor(private dc:DoctorserviceService, private router:Router) { }
  ngOnInit(): void {
  }
  invalidLogin=false
  errorMessage='Invalid Credentials';
  nameh:string='';
  passwordh:string='';
  logindataobject:Admin='';
  logintoadmin(){
   this.logindataobject={
    "username":this.nameh,
    "password":this.passwordh,
   }
   this.dc.adminlogincheckmethod(this.logindataobject).subscribe((res)=>{
    if(res==true){
      this.router.navigate(['/adminpanel/admin-doctoredit']);
    }
    else{
      this.invalidLogin=true;
    }
   })
  }

}
