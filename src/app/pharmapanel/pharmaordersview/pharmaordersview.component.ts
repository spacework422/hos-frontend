import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrugService } from 'src/app/drug.service';

@Component({
  selector: 'app-pharmaordersview',
  templateUrl: './pharmaordersview.component.html',
  styleUrls: ['./pharmaordersview.component.css']
})
export class PharmaordersviewComponent implements OnInit {
  constructor(private du:DrugService, private router:Router) { }
  ngOnInit(): void {
    this.startfunction();
  }
  // variable
  orders:Array<any>=[];


  startfunction(){
   this.du.alldrugsmethod().subscribe((res)=>{
    res.forEach((r)=>{
      if(r.phaname == sessionStorage.getItem('pharmalogin')){
        this.orders.push(r);
      }

    })
   })
  }


  vieworder(drugId:number){
   sessionStorage.setItem('pharmaviewform', drugId.toString());
   this.router.navigate(['/pharmapanel/pharmaviewform']);
  }
}
