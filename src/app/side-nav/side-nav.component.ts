import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit
{
@Input() sideNavStatus:boolean=false;
  list=[
    {
       number:'1',
       name:'home',
       icon:'fa-solid fa-house',
    },
 

  {
    number:'2',
    name:'About',
    icon:'fa-solid fa-gear',
  },
  {
    number:'3',
    name:'Contact',
    icon:'fa-solid fa-phone',
  },
];

  ngOnInit(): void {
    
  }

}