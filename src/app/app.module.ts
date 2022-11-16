import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule,  } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


// components imported declared
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DoctorloginComponent } from './doctorpanel/doctorlogin/doctorlogin.component';
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
import { DoctorserviceService } from './doctorservice.service';
import { PharmaserviceService } from './pharmaservice.service';
import { DoctorpanelComponent } from './doctorpanel/doctorpanel.component';
import { PharmapanelComponent } from './pharmapanel/pharmapanel.component';
import { DoctorsideComponent } from './doctorpanel/doctorside/doctorside.component';
import { PharmasideComponent } from './pharmapanel/pharmaside/pharmaside.component';
import { AdmindoctoreditComponent } from './adminpanel/admindoctoredit/admindoctoredit.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpharmadetailsComponent } from './adminpanel/adminpharmadetails/adminpharmadetails.component';
import { HealthreportService } from './healthreport.service';
import { HealthreportComponent } from './doctorpanel/healthreport/healthreport.component';
import { DoctorviewformComponent } from './doctorpanel/doctorviewform/doctorviewform.component';
import { PatientviewformComponent } from './loggedpage/patientviewform/patientviewform.component';
import { PharmaordersviewComponent } from './pharmapanel/pharmaordersview/pharmaordersview.component';
import { LoggedDrugComponent } from './loggedpage/logged-drug/logged-drug.component';
import { PharmaviewformComponent } from './pharmapanel/pharmaviewform/pharmaviewform.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

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
    LoggedpagePrescriptionComponent,
    GeneraltestComponent,
    DoctorpanelComponent,
    PharmapanelComponent,
    DoctorsideComponent,
    PharmasideComponent,
    AdmindoctoreditComponent,
    AdminloginComponent,
    AdminpharmadetailsComponent,
    LoggedpageAppointmentComponent,
    HealthreportComponent,
    DoctorviewformComponent,
    PatientviewformComponent,
    PharmaordersviewComponent,
    LoggedDrugComponent,
    PharmaviewformComponent,
    AboutusComponent,
    ContactusComponent,
    AdminRegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatRadioModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [PatientserviceService,DoctorserviceService,PharmaserviceService,HealthreportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
