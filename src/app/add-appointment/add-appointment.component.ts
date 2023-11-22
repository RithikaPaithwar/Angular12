import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  [x: string]: any;
  appointments: Appointment = new Appointment();
  

  constructor(private appointmentservice:AppointmentService,
    private router:Router) { }

  ngOnInit(): void {
  }
    saveAppointment(){
      this.appointmentservice.addappointment(this.appointments).subscribe(data=>{ 
        console.log(data);
        this.goToAppointmentlist();
      },
      error=> console.log(error));
  }
  goToAppointmentlist(){
    this.router.navigate(['/appointments-list']);
  }
  onSubmit(){
    console.log(this.appointments);
    this.saveAppointment();
  }

}
