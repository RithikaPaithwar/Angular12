import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit{

  patients: Patient[] = []; 
  constructor( private patientservice:PatientService,
    private router:Router)  { }

  ngOnInit(): void {
    this.getPatients();
  }
  getPatients() {
    this.patientservice.getPatientslist().subscribe(data => {
      this.patients = data;
    });
  }
  patientDetails(id:number){
    this.router.navigate(['patient-details',id]);
  }
  
update(id:number){
  this.router.navigate(['update-patient/',id])
}

deletePatient(id:number){
  this.patientservice.deletePatient(id).subscribe(data =>{
    console.log(data);
this.getPatients();
  })
}
}
