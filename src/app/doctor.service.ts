import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL ="http://localhost:8080/api/doctors"

  constructor(private httpClient : HttpClient) {}

  getDoctorslist(): Observable<Doctor[]>{
  return this.httpClient.get<Doctor[]>(`${this.baseURL}`);
  }
   
  adddoctor(doctor:Doctor): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,doctor);
  }

  getDoctorById(id:number): Observable<Doctor>{
return this.httpClient.get<Doctor>( `${this.baseURL}/${id}`);
  }

  updateDoctor(id:number, doctor:Doctor):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,doctor);
  }
  deleteDoctor(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
