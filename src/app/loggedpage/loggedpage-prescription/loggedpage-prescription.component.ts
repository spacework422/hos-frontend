import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from 'src/app/patientservice.service';

@Component({
  selector: 'app-loggedpage-prescription',
  templateUrl: './loggedpage-prescription.component.html',
  styleUrls: ['./loggedpage-prescription.component.css']
})
export class LoggedpagePrescriptionComponent implements OnInit {

  constructor(public ps:PatientserviceService) { }

  ngOnInit(): void {
  }

  triggerdata(){
    this.ps.getdata();
  }

}
