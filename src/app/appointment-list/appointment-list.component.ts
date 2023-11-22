import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = []; 
  constructor( private appointmentservice:AppointmentService,
    private router:Router)  { }
  
  ngOnInit(): void {
    this.getAppointments();
  }
     getAppointments() {
    this.appointmentservice.getAppointmentlist().subscribe(data => {
      this.appointments = data;
    });
  }
  appointmentDetails(id:number){
    this.router.navigate(['appointment-details',id]);
  }
  
update(id:number){
  this.router.navigate(['update-appointment/',id])
}

deleteAppointment(id:number){
  this.appointmentservice.deleteAppointment(id).subscribe(data =>{
    console.log(data);
this.getAppointments();
  })
}
}
