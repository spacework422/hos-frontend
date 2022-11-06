import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { DoctorserviceService } from 'src/app/doctorservice.service';

@Component({
  selector: 'app-loggedpage-appointment',
  templateUrl: './loggedpage-appointment.component.html',
  styleUrls: ['./loggedpage-appointment.component.css']
})
export class LoggedpageAppointmentComponent implements OnInit {
  constructor(private dc:DoctorserviceService) { }
  re:Array<any>=[];
  ngOnInit(): void {
  }
  selectedr(valuer:string){
    this.re=[];
    this.dc.getbystream(valuer).subscribe((res)=>{
      res.forEach((r)=>{
        this.re.push(r);
      });
    });
  }

}
