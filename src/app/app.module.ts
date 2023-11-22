import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';




@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    DoctorListComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    WelcomeComponent,
    LoginComponent,
    AddAppointmentComponent,
    UpdateAppointmentComponent,
    AppointmentListComponent,
    PatientListComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    DoctorComponent,
    CreateUserComponent,
    AddFeedbackComponent,
    UpdateFeedbackComponent,
    FeedbackListComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
