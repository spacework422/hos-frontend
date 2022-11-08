import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/Doctor';
import { DoctorserviceService } from 'src/app/doctorservice.service';

@Component({
  selector: 'app-admin-doctorregistration',
  templateUrl: './admin-doctorregistration.component.html',
  styleUrls: ['./admin-doctorregistration.component.css']
})
export class AdminDoctorregistrationComponent implements OnInit {
constructor(private dc:DoctorserviceService) { }
ngOnInit(): void {
}
nameh:string='';
usernameh:string='';
passwordh:string='';
hospitalh:string='';
specializationh:string='';
experiance:string='';
locationh:string='';
doctorobject:Doctor='';

  submitdoctormethod(form: NgForm){
   this.doctorobject={
    "name":this.nameh,
    "hospital":this.hospitalh,
    "specialization":this.specializationh,
    "experiance":this.experiance,
    "location":this.locationh,
    "username":this.usernameh,
    "password":this.passwordh
   }
   this.dc.doctorregisterobject(this.doctorobject).subscribe((res)=>{

     alert("submitted");
     form.reset();
   })
  }
}
