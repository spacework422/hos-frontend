import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDoctorregistrationComponent } from './adminpanel/admin-doctorregistration/admin-doctorregistration.component';
import { AdminPharmasistregistrationComponent } from './adminpanel/admin-pharmasistregistration/admin-pharmasistregistration.component';
import { AdminSidemenuComponent } from './adminpanel/admin-sidemenu/admin-sidemenu.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { GeneraltestComponent } from './generaltest/generaltest.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoggedpageAppointmentComponent } from './loggedpage/loggedpage-appointment/loggedpage-appointment.component';
import { LoggedpagePrescriptionComponent } from './loggedpage/loggedpage-prescription/loggedpage-prescription.component';
import { LoggedstartpageComponent } from './loggedpage/loggedstartpage/loggedstartpage.component';
import { LoginComponent } from './login/login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { PharmacistloginComponent } from './pharmacistlogin/pharmacistlogin.component';

const routes: Routes = [
  // main routes without child
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path:'homepage', component:HomepageComponent },
  {path:'patientSignup', component:PatientSignupComponent},
  {path:'login', component:LoginComponent},
  {path:'doctorlogin', component:DoctorloginComponent},
  {path:'pharmacistlogin', component:PharmacistloginComponent},
  {path:'general', component:GeneraltestComponent},



  //admin panel and routes 
  {path:'adminpanel', component:AdminpanelComponent, children:[
    {path:'admin-doctorregistration' , component:AdminDoctorregistrationComponent },
    {path:'admin-sidemenu' , component:AdminSidemenuComponent },
    {path:'admin-pharmasistregistration' , component:AdminPharmasistregistrationComponent},
  ]},

  // loggedpage routes 
  {path:'loggedstartpage', component:LoggedstartpageComponent , children:[
   {path:'loggedpage-appointment', component:LoggedpageAppointmentComponent},
   {path:'loggedpage-prescription', component:LoggedpagePrescriptionComponent},

  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
