import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = []; 
  constructor( private doctorservice:DoctorService,
    private router:Router)  { }
  
  ngOnInit(): void {
    this.getDoctors();
  }
     getDoctors() {
    this.doctorservice.getDoctorslist().subscribe(data => {
      this.doctors = data;
    });
  }
  doctorDetails(id:number){
    this.router.navigate(['doctor-details',id]);
  }
  
update(id:number){
  this.router.navigate(['update-doctor/',id])
}

deleteDoctor(id:number){
  this.doctorservice.deleteDoctor(id).subscribe(data =>{
    console.log(data);
this.getDoctors();
  })
}
}
