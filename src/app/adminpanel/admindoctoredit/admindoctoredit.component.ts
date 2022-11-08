import {  Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { DoctorserviceService } from 'src/app/doctorservice.service';

@Component({
  selector: 'app-admindoctoredit',
  templateUrl: './admindoctoredit.component.html',
  styleUrls: ['./admindoctoredit.component.css']
})
export class AdmindoctoreditComponent implements OnInit {
  constructor(private dc:DoctorserviceService) { }
  ngOnInit(): void {
  this.getdoctors();
  }
  doctors:any=[];
  singledoctor:Doctor='';

  
  getdoctors(){
    this.dc.getalldoctorsobjects().subscribe((res)=>{
      this.doctors=res;
    })   
  }

  deletedoctor(id:number){
    this.singledoctor={
      "doctorId":id
    }
    this.doctors=[];
    this.dc.deletedoctorbyidmethod(this.singledoctor).subscribe((res)=>{
     res.forEach((r)=>{ 
        this.doctors.push(r);
     })
    })
  }

}
