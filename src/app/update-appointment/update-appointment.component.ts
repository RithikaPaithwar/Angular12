import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {


  id: number | undefined;
  appointments:Appointment = new Appointment();
  constructor(private appointmentService: AppointmentService,
    private route: ActivatedRoute) { }
    
    onSubmit() {
      if (this.id !== undefined ) {
        
        this.appointmentService.updateAppointment(this.id, this.appointments).subscribe(
          response => {
            alert("Sucess");
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  ngOnInit(): void {
    if(this.id !== undefined)
    
    {

    this.appointmentService.getAppointmentById(this.id).subscribe(data => {
      this.appointments= data;
    },
      error => console.log(error));
  }
  }

}
