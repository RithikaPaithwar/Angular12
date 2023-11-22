import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from './feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseURL ="http://localhost:8080/api/feedbacks"
  getpatientlist: any;

  constructor(private httpClient : HttpClient) {}

  getFeedbackslist(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`);  
    }
     
    addfeedback(feedback:Feedback): Observable<object>{
      return this.httpClient.post(`${this.baseURL}`,feedback);
    }
  
    getFeedbackById(id:number): Observable<Feedback>{
  return this.httpClient.get<Feedback>( `${this.baseURL}/${id}`);
    }
  
    updateFeedback(id:number, feedback:Feedback):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,feedback);
    }
    deleteFeedback(id:number){
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }  
}
