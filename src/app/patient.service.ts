import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL ="http://localhost:8080/api/patients"
  getpatientlist: any;

  constructor(private httpClient : HttpClient) {}

  getPatientslist(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);  
    }
     
    addpatient(patient:Patient): Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,patient);
    }
  
    getPatientById(id:number): Observable<Patient>{
  return this.httpClient.get<Patient>( `${this.baseURL}/${id}`);
    }
  
    updatePatient(id:number, patient:Patient):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,patient);
    }
    deletePatient(id:number){
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }  
}
