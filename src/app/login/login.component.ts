import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: Login = new Login();
  userType: string = ''; 

  constructor(private loginService: LoginServiceService, private router: Router) {}

  onUserTypeChange(userType: string) {
    this.userType = userType; 
  }

  onSubmit() {
    this.loginService.Login(this.login).subscribe(data => {
      if (this.userType === 'doctor') 
      {
        this.router.navigate(['/doctor']);
      } 
      else if (this.userType === 'patient')
       {
        this.router.navigate(['/patient']);
      }
      alert('Login successful');
    }, 
    error => 
    {
      alert('Login failed. Please try again.'); 
    });
  }
}