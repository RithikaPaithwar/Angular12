import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  [x: string]: any;
  doctors: Doctor = new Doctor();
  

  constructor(private doctorservice:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveDoctor(){
    this.doctorservice.adddoctor(this.doctors).subscribe(data=>{ 
      console.log(data);
      this.goToDoctorlist();
    },
    error=> console.log(error));
  }
  

  goToDoctorlist(){
    this.router.navigate(['/doctors']);

  }
  onSubmit(){
    console.log(this.doctors);
    this.saveDoctor();
  }

}

