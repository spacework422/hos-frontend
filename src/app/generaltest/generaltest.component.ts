import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from 'src/app/patientservice.service';




@Component({
  selector: 'app-generaltest',
  templateUrl: './generaltest.component.html',
  styleUrls: ['./generaltest.component.css']
})
export class GeneraltestComponent implements OnInit {

  constructor(public ps:PatientserviceService) { }

  ngOnInit(): void {
  }
  // triggerdata(){
  //   this.ps.getdata();
  // }
}
