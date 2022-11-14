import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pharma } from './Pharma';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PharmaserviceService {
  constructor(private http:HttpClient) { }
  globalurltype=environment.globalurl;
  //urls
  allpharma:string=`http://${this.globalurltype}:7075/pdms/admincontroller/getallpharma`;
  registerpharma:string=`http://${this.globalurltype}:7075/pdms/admincontroller/pharmaregistration`;
  byid:string=`http://${this.globalurltype}:7075/hospital/pharmacontroller/getbyid/`

  //methods
 //get all pharma objects list(return all objects in database)
 getallpharma():Observable<any [] >{
    return this.http.get<any []>(this.allpharma);
  }
 // to register pharma object(return register object)
 toregisterpharma(pharmaobject:Pharma){
   return this.http.post(this.registerpharma,pharmaobject);
 }
 // get by id(return object )
 getpharmabyid(id:number){
  return this.http.get(`http://${this.globalurltype}:7075/hospital/pharmacontroller/getbyid/${id}`);
 }
 //logincheck pharma
 logincheckpharma(objectpharma:Pharma){
  return this.http.post(`http://${this.globalurltype}:7075/pdms/admincontroller/pharmalogin`,objectpharma);
 }

 //delete by id
  //deletepharmaby id 
  deletepharmabyidmethod(deletableid:Pharma):Observable<any [] >{
    return this.http.post<any []>(`http://${this.globalurltype}:7075/pdms/admincontroller/deletepharmabyid`,deletableid);
  }


}
