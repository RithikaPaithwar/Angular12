import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  [x: string]: any;
  feedbacks: Feedback = new Feedback();
  

  constructor(private feedbackservice:FeedbackService,
    private router:Router) { }

  ngOnInit(): void {
  }
  saveFeedback(){
    this.feedbackservice.addfeedback(this.feedbacks).subscribe(data=>{ 
      console.log(data);
      this.goToFeedbacklist();
    },
    error=> console.log(error));
  }
  

  goToFeedbacklist(){
    this.router.navigate(['/feedbacks']);

  }
  onSubmit(){
    console.log(this.feedbacks);
    this.saveFeedback();
  }

}

