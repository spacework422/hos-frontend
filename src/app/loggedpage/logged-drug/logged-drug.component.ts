import { Component, OnInit } from '@angular/core';
import { DrugService } from 'src/app/drug.service';

@Component({
  selector: 'app-logged-drug',
  templateUrl: './logged-drug.component.html',
  styleUrls: ['./logged-drug.component.css']
})
export class LoggedDrugComponent implements OnInit {
  constructor(private du:DrugService) { }
  ngOnInit(): void {
    this.startmethod();
  }
durgslist:Array<any>=[];

  startmethod(){
    this.du.alldrugsmethod().subscribe((res)=>{
      res.forEach((r)=>{
        if(r.pname == sessionStorage.getItem('patientloginname')){
          this.durgslist.push(r);
        }
      })
    })
  }

}
