import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from 'src/app/patientservice.service';
import { Pharma } from 'src/app/Pharma';
import { PharmaserviceService } from 'src/app/pharmaservice.service';

@Component({
  selector: 'app-adminpharmadetails',
  templateUrl: './adminpharmadetails.component.html',
  styleUrls: ['./adminpharmadetails.component.css']
})
export class AdminpharmadetailsComponent implements OnInit {
  constructor(private dc:PharmaserviceService) { }
  ngOnInit(): void {
    this.getpharma();
  }
  pharmas:any=[];
  singlepharma:Pharma='';

 //methods
  getpharma(){
    this.dc.getallpharma().subscribe((res)=>{
      this.pharmas=res;
    })   
  }

  deletepharma(id:number){
  this.singlepharma={
    "pharmaId":id
  }
  this.pharmas=[];
  this.dc.deletepharmabyidmethod(this.singlepharma).subscribe((res)=>{
    res.forEach((r)=>{
      this.pharmas.push(r);
    })
  })
  }
}
