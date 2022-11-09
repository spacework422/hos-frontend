import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/Drug';
import { DrugService } from 'src/app/drug.service';

@Component({
  selector: 'app-pharmaviewform',
  templateUrl: './pharmaviewform.component.html',
  styleUrls: ['./pharmaviewform.component.css']
})
export class PharmaviewformComponent implements OnInit {
  constructor(private dur:DrugService,private router:Router) { }
  ngOnInit(): void {
    this.startingfunction();
  }
 //variables
 pname:string='';
 quantity:string='';
 orderdetails:string='';
 orderstatus:string='';
 //
 drugobject:Drug='';

 startingfunction(){
  this.dur.drugbyid(Number(sessionStorage.getItem('pharmaviewform'))).subscribe((res:any)=>{
     this.pname=res.pname
     this.quantity=res.quantity
     this.orderdetails=res.orderDetails
     this.orderstatus=res.orderstatus
  })
 }
 submitfunction(){
  this.drugobject={
    "orderstatus":this.orderstatus
  }
  this.dur.orderstatusmethod(Number(sessionStorage.getItem('pharmaviewform')),this.drugobject).subscribe((res)=>{
    alert('submitted');
  })
 }
 backfunction(){
  this.router.navigate(['/pharmapanel/pharmaorderview']);
 }

}
