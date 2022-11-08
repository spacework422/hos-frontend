import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pharma } from 'src/app/Pharma';
import { PharmaserviceService } from 'src/app/pharmaservice.service';

@Component({
  selector: 'app-admin-pharmasistregistration',
  templateUrl: './admin-pharmasistregistration.component.html',
  styleUrls: ['./admin-pharmasistregistration.component.css']
})
export class AdminPharmasistregistrationComponent implements OnInit {
  constructor(private ph:PharmaserviceService) { }
  ngOnInit(): void {
  }
  nameh:string='';
  usernameh:string='';
  passwordh:string='';
  locationh:string='';
  phonen:string='';
  pharmaobject:Pharma='';

  submitpharmaobject(form: NgForm){
   this.pharmaobject={
    "name":this.nameh,
    "username":this.usernameh,
    "password":this.passwordh,
    "phone":this.phonen,
    "location":this.locationh
   }
   this.ph.toregisterpharma(this.pharmaobject).subscribe((res)=>{
    alert("submitted");
    form.reset();
   })
  }
}
