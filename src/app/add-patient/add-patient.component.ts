import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit{

  [x: string]: any;
  patient: Patient = new Patient();
  
  constructor(private patientservice:PatientService,
    private router:Router) { }

  ngOnInit(): void {
  }
    savePatient(){
    this.patientservice.addpatient(this.patient).subscribe(data=>{ 
      console.log(data);
      this.goToPatientlist();
    },
    error=> console.log(error));
  }
  goToPatientlist(){
    this.router.navigate(['/patients']);

  }
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
  }
}
