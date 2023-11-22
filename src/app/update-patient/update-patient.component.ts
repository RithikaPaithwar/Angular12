import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number | undefined;
  patients: Patient = new Patient();
  constructor(private patientService: PatientService,
    private route: ActivatedRoute) { }
    
    onSubmit() {
      if (this.id !== undefined ) {
        
        this.patientService.updatePatient(this.id, this.patients).subscribe(
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

      this.patientService.getPatientById(this.id).subscribe(data => {
        this.patients = data;
      },
        error => console.log(error));
    }
  }

}
