import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  id: number | undefined;
  doctors: Doctor = new Doctor();
  constructor(private doctorService: DoctorService,
    private route: ActivatedRoute) { }
    
    onSubmit() {
      if (this.id !== undefined ) {
        
        this.doctorService.updateDoctor(this.id, this.doctors).subscribe(
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

    this.doctorService.getDoctorById(this.id).subscribe(data => {
      this.doctors = data;
    },
      error => console.log(error));
  }
  }
}
