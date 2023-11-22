import { Injectable } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  private baseUrl = "http://localhost:8080/user"
  

  constructor(private http:HttpClient) { }

  Login(login:Login){
    return  this.http.post(`${this.baseUrl}/login`,login);
   }

   createUser(login: Login) {
    return this.http.post(`${this.baseUrl}/adduser`,login);
  }
}
