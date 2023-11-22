import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../login';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  login : Login = new Login();
 
  constructor(private loginservice :LoginServiceService, private router:Router){}

  saveUser()
  {
    this.loginservice.createUser(this.login).subscribe
    (data=>{console.log(data);
       this.goTOLoginPage()});
    
  }
  

  goTOLoginPage(){
    this.router.navigate(['login']);
  }

  onSubmit()
  {
    console.log(this.login);
    this.saveUser();
  }
}