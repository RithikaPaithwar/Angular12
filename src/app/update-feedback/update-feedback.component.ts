import { Component, OnInit } from '@angular/core';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {

  id: number | undefined;
  feedbacks: Feedback = new Feedback();
  constructor(private feedbackService: FeedbackService,
    private route: ActivatedRoute) { }
    
    onSubmit() {
      if (this.id !== undefined ) {
        
        this.feedbackService.updateFeedback(this.id, this.feedbacks).subscribe(
          response => {
            alert("Sucess");
          },
          error => {
            console.error(error);
          }
        );
      }
    }
    

  ngOnInit(): void {
    if(this.id !== undefined)
    
    {

    this.feedbackService.getFeedbackById(this.id).subscribe(data => {
      this.feedbacks = data;
    },
      error => console.log(error));
  }
  }
}

