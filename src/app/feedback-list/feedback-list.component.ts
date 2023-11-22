import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  feedbacks: Feedback[] = []; 
  constructor( private feedbackservice:FeedbackService,
    private router:Router)  { }
  
  ngOnInit(): void {
    this.getFeedbacks();
  }
     getFeedbacks() {
    this.feedbackservice.getFeedbackslist().subscribe(data => {
      this.feedbacks = data;
    });
  }
 
update(id:number){
  this.router.navigate(['update-feedback/',id])
}

deleteFeedback(id:number){
  this.feedbackservice.deleteFeedback(id).subscribe(data =>{
    console.log(data);
this.getFeedbacks();
  })
}
}

