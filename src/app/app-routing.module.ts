import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDoctorregistrationComponent } from './adminpanel/admin-doctorregistration/admin-doctorregistration.component';
import { AdminPharmasistregistrationComponent } from './adminpanel/admin-pharmasistregistration/admin-pharmasistregistration.component';
import { AdminSidemenuComponent } from './adminpanel/admin-sidemenu/admin-sidemenu.component';
import { AdmindoctoreditComponent } from './adminpanel/admindoctoredit/admindoctoredit.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminpharmadetailsComponent } from './adminpanel/adminpharmadetails/adminpharmadetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DoctorloginComponent } from './doctorpanel/doctorlogin/doctorlogin.component';
import { DoctorpanelComponent } from './doctorpanel/doctorpanel.component';
import { DoctorviewformComponent } from './doctorpanel/doctorviewform/doctorviewform.component';
import { HealthreportComponent } from './doctorpanel/healthreport/healthreport.component';
import { GeneraltestComponent } from './generaltest/generaltest.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedDrugComponent } from './loggedpage/logged-drug/logged-drug.component';
import { LoggedpageAppointmentComponent } from './loggedpage/loggedpage-appointment/loggedpage-appointment.component';
import { LoggedpagePrescriptionComponent } from './loggedpage/loggedpage-prescription/loggedpage-prescription.component';
import { LoggedstartpageComponent } from './loggedpage/loggedstartpage/loggedstartpage.component';
import { PatientviewformComponent } from './loggedpage/patientviewform/patientviewform.component';
import { LoginComponent } from './login/login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PharmacistloginComponent } from './pharmacistlogin/pharmacistlogin.component';
import { PharmaordersviewComponent } from './pharmapanel/pharmaordersview/pharmaordersview.component';
import { PharmapanelComponent } from './pharmapanel/pharmapanel.component';
import { PharmaviewformComponent } from './pharmapanel/pharmaviewform/pharmaviewform.component';

const routes: Routes = [
  // main routes without child
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path:'homepage', component:HomepageComponent },
  {path:'patientSignup', component:PatientSignupComponent},
  {path:'login', component:LoginComponent},
  {path:'general', component:GeneraltestComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'admin-doctorregistration-home' , component:AdminDoctorregistrationComponent },
  {path:'admin-pharmasistregistration-home' , component:AdminPharmasistregistrationComponent},
  {path:'admin-register' , component:AdminRegisterComponent},


    

  //admin panel and routes 
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminpanel', component:AdminpanelComponent, children:[
    {path:'admin-doctorregistration' , component:AdminDoctorregistrationComponent },
    {path:'admin-sidemenu' , component:AdminSidemenuComponent },
    {path:'admin-pharmasistregistration' , component:AdminPharmasistregistrationComponent},
    {path:'admin-doctoredit', component:AdmindoctoreditComponent},
    {path:'admin-pharmaedit', component:AdminpharmadetailsComponent},
  ]},

  // loggedpage routes 
  {path:'loggedstartpage', component:LoggedstartpageComponent , children:[
   {path:'loggedpage-appointment', component:LoggedpageAppointmentComponent},
   {path:'loggedpage-prescription', component:LoggedpagePrescriptionComponent},
   {path:'loggedpage-patientviewform', component:PatientviewformComponent},
   {path:'loggedpage-patientdrug', component:LoggedDrugComponent},

  ]},

  //doctorpanel
  {path:'doctorlogin', component:DoctorloginComponent},
  {path:'doctorpanel', component:DoctorpanelComponent , children:[
    {path:'doctorhealth', component:HealthreportComponent},
    {path:'doctorviewform', component:DoctorviewformComponent}

  ] },
  
  //pharmapanel
  {path:'pharmacistlogin', component:PharmacistloginComponent},
  {path:'pharmapanel',component:PharmapanelComponent, children:[
    {path:'pharmaorderview', component:PharmaordersviewComponent},
    {path:'pharmaviewform', component:PharmaviewformComponent},

  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
