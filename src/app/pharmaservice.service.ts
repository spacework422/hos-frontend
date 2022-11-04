import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pharma } from './Pharma';

@Injectable({
  providedIn: 'root'
})
export class PharmaserviceService {
  constructor(private http:HttpClient) { }

  //urls
  allpharma:string="http://localhost:7075/hospital/pharmacontroller/getpharma";
  registerpharma:string="http://localhost:7075/hospital/pharmacontroller/pharmaregister";
  byid:string="http://localhost:7075/hospital/pharmacontroller/getbyid/"

  //methods
 //get all pharma objects list(return all objects in database)
 getallpharma(){
    return this.http.get(this.allpharma);
  }
 // to register pharma object(return register object)
 toregisterpharma(pharmaobject:Pharma){
   return this.http.post(this.registerpharma,pharmaobject);
 }
 // get by id(return object )
 getpharmabyid(id:number){
  return this.http.get(`http://localhost:7075/hospital/pharmacontroller/getbyid/${id}`);
 }
}
