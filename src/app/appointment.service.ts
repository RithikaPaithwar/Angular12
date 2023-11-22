import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService
{
  private baseURL ="http://localhost:8080/api/appointment"

constructor(private httpClient : HttpClient) { }
getAppointmentlist(): Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }
   
  addappointment(appointment:Appointment): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,appointment);
  }

  getAppointmentById(id:number): Observable<Appointment>{
return this.httpClient.get<Appointment>( `${this.baseURL}/${id}`);
  }

  updateAppointment(id:number, appointment:Appointment):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,appointment);
  }
  deleteAppointment(id:number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
