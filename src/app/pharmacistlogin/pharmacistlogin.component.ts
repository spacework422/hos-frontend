import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharma } from '../Pharma';
import { PharmaserviceService } from '../pharmaservice.service';

@Component({
  selector: 'app-pharmacistlogin',
  templateUrl: './pharmacistlogin.component.html',
  styleUrls: ['./pharmacistlogin.component.css']
})
export class PharmacistloginComponent implements OnInit {
  constructor(private pha:PharmaserviceService,private router:Router) { }
  ngOnInit(): void {
  }
  usernameh:string='';
  passwordh:string='';
  invalidLogin=false
  errorMessage='Invalid Credentials';
  pharma:Pharma='';


  signinmethod(){
   this.pharma={
    "name":this.usernameh,
    "password":this.passwordh
   } 
   this.pha.logincheckpharma(this.pharma).subscribe((res)=>{
    if(res==true){
      sessionStorage.setItem('pharmalogin',this.usernameh);
      this.router.navigate(['/pharmapanel/pharmaorderview']);
    }
    else{
      this.invalidLogin=true;
    }
   });
  }

}
