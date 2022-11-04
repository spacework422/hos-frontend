import { Component, OnInit } from '@angular/core';
import { Doctor } from '../Doctor';
import { Pharma } from '../Pharma';
import { PharmaserviceService } from '../pharmaservice.service';





@Component({
  selector: 'app-generaltest',
  templateUrl: './generaltest.component.html',
  styleUrls: ['./generaltest.component.css']
})
export class GeneraltestComponent implements OnInit {
constructor(public ps:PharmaserviceService) { }

htmlel:any;

  ngOnInit(): void {
  }
  hello:Pharma = {
   "name":"pharma1",
   "email":"asdfasd",
   "age":21,
   "phoneno":1234,
   "password":"testing",

  }
  getallpatients(){
    this.ps.getpharmabyid(14).subscribe((responsedata)=>{
       console.log(responsedata);  
    })
  }
  public triggerpost(){
    this.ps.toregisterpharma(this.hello).subscribe((resposedata)=>{
      this.htmlel=resposedata;
    })
  }
}
