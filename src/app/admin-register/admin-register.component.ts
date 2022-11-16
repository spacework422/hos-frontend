import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { DoctorserviceService } from '../doctorservice.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  constructor(private dc:DoctorserviceService, private router:Router) { }
 nameh='';
 passwordh='';
 bloodgrouph='';
 ageh='';
 phonenumberh='';


adminobject:Admin={}
  ngOnInit(): void {
  }
  submitdata(){
    this.adminobject={
      "username":this.nameh,
      "password":this.passwordh,
      "name":this.bloodgrouph,
      "address":this.ageh,
      "phoneno":this.phonenumberh
    }
    this.dc.adminregistermethod(this.adminobject).subscribe((res)=>{
      this.router.navigate(['/adminlogin']);
    })
  }

}
