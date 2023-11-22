import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  @Output() sideNavToggled=new EventEmitter<boolean>();
  menuStatus:boolean=false;
 
  constructor( private router:Router,
   private service:PatientService){}
 
   ngOnInit(): void {
     
   }
   SideNavToggle(){
     this.menuStatus=!this.menuStatus;
     this.sideNavToggled.emit(this.menuStatus);
   }
   
 }
