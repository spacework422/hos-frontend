import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule,  } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';

// components imported declared
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { PharmacistloginComponent } from './pharmacistlogin/pharmacistlogin.component';
import { LoggedstartpageComponent } from './loggedpage/loggedstartpage/loggedstartpage.component';
import { LoggedpageSidemenuComponent } from './loggedpage/loggedpage-sidemenu/loggedpage-sidemenu.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminDoctorregistrationComponent } from './adminpanel/admin-doctorregistration/admin-doctorregistration.component';
import { AdminSidemenuComponent } from './adminpanel/admin-sidemenu/admin-sidemenu.component';
import { AdminPharmasistregistrationComponent } from './adminpanel/admin-pharmasistregistration/admin-pharmasistregistration.component';
import { LoggedpageAppointmentComponent } from './loggedpage/loggedpage-appointment/loggedpage-appointment.component';
import { LoggedpagePrescriptionComponent } from './loggedpage/loggedpage-prescription/loggedpage-prescription.component';
//services imported 
import { PatientserviceService } from './patientservice.service';
import { GeneraltestComponent } from './generaltest/generaltest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PatientSignupComponent,
    HomepageComponent,
    DoctorloginComponent,
    PharmacistloginComponent,
    LoggedstartpageComponent,
    LoggedpageSidemenuComponent,
    AdminpanelComponent,
    AdminDoctorregistrationComponent,
    AdminSidemenuComponent,
    AdminPharmasistregistrationComponent,
    LoggedpageAppointmentComponent,
    LoggedpagePrescriptionComponent,
    GeneraltestComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    HttpClientModule,

  ],
  providers: [PatientserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
