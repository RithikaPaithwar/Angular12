import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login'])  }

    navigateTocreateUser() {
      this.router.navigate(['/create-user'])  }
  
  }
