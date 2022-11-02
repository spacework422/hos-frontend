import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  receiveddata:any= null;
  description:string[] = [
    "test 1 ", 
    "Seenu is an orphaned street urchin, who used to play Violin and earn money in streets. He has a friend named Junnu. He makes a very close bonding with her",
    "test 3",
  ];
  urlgetdata:string = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
  constructor(private http:HttpClient) { }

  // getdata():any{
  //   this.http.get(this.urlgetdata).subscribe(Obser)
  // }

}
