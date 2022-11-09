import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Drug } from './Drug';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  constructor(private http:HttpClient) { }

  submissionmethod(drugobject:Drug){
    return this.http.post("http://18.222.231.58:7075/pdms/drugcontroller/drugregistration",drugobject);
  }
   
  //all drugs
  alldrugsmethod():Observable<any [] >{
    return this.http.get<any []>("http://18.222.231.58:7075/pdms/drugcontroller/getalldrugs");
  }

  //drug by id
  drugbyid(id:number):any{
    return this.http.get<any>(`http://18.222.231.58:7075/pdms/drugcontroller/drugbyid/${id}`)
  }
  //orderstatus set
  orderstatusmethod(id:number,object:Drug){
    return this.http.put(`http://18.222.231.58:7075/pdms/drugcontroller/orderstatus/${id}`,object)
  }
}
