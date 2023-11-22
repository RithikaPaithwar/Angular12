import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() sideNavToggled=new EventEmitter<boolean>();
 menuStatus:boolean=false;

 constructor( private router:Router,
  private service:DoctorService){}

  ngOnInit(): void {
    
  }
  SideNavToggle(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  
}