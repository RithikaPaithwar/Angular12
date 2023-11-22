import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { PatientComponent } from './patient/patient.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';



const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent }, 
 {path:'login',component:LoginComponent},
  {path:'doctor-list',component:DoctorListComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'update-doctor/:id',component:UpdateDoctorComponent},
  {path:'header',component:HeaderComponent},
  {path:'feedback-list',component:FeedbackListComponent},
  {path:'update-feedback',component:UpdateFeedbackComponent},
  {path:'add-feedback',component:AddFeedbackComponent},
  {path:'patient-list',component:PatientListComponent},
 {path:'add-patient',component:AddPatientComponent},
  {path:'update-patient/:id',component:UpdatePatientComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'add-appointment',component:AddAppointmentComponent},
  {path:'appointment-list',component:AppointmentListComponent},
  {path:'update-appointment/:id',component:UpdateAppointmentComponent},
  {path:'patient',component:PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
